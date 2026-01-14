import express from "express";
import {readFileSync, writeFileSync} from "fs"
const route = express.Router();

function readData (){
    const data = readFileSync('./db.json', "utf-8");
    return JSON.parse(data);
}

function writeData(data){
    writeFileSync('./db.json', JSON.stringify(data,null,2))
}
route.post("/add",(req,res)=>{
    const data = readData();
    const newUser = {
        id: data.users.length > 0 ? data.users[data.users.length -1 ].id+1:1,
        name: req.body.name,
        age: req.body.age

    }
    data.users.push(newUser);
    writeData(data);
    res.status(201).send("user added")

});

route.get("/",(req,res)=>{
    const data = readData();
    res.status(200).json(data.users)

});

route.get ('/:userId',(req,res)=>{
    const data = readData();
    const user = data.users.find(el=>el.id === parseInt(req.params.userId));
    if(!user){
        return res.status(404).json({message:"User not found"});
    }

    res.status(200).json(user)
});

route.put("/update/:userId",(req,res)=>{
    const data =readData();
    // console.log('original data',data)
    const userId = parseInt(req.params.userId);
    // console.log("userId",userId);
    // let users= data.users
    const newData = {
        age: req.body.age
    }
    // console.log("new age",newData)
    const user = data.users.map(el=>el.id === userId ? {...el, ...newData}:el);
    data.users = user;
    // console.log("updated data",data)
    writeData(data);
    res.status(200).send("user updated")

});

route.delete("/delete/:userId",(req,res)=>{
    const data = readData();
    const userId = parseInt(req.params.userId);
    const user = data.users.filter(el=>el.id !== userId);
    data.users =user;
    writeData(data);
    res.status(200).send("user deleted")
})



export default route;