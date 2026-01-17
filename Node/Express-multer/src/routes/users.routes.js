import express from "express";
import {readFileSync,writeFileSync} from 'fs';
import { upload } from "../middleware/upload.middleware.js";
import checkEmail from "../middleware/uniqueEmail.middleware.js";
import path from "path";
import { fileURLToPath } from "url";

const route = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../db.json');
console.log(dbPath)


function readData(){
    const data = readFileSync(dbPath,'utf-8');
    return JSON.parse(data);
}
function writeData(data){
    return writeFileSync(dbPath,JSON.stringify(data,null,2));
}

route.get('/',(req,res)=>{
    res.send(`
        <h2 style ="color: pink; margin-left: 100px">User Form</h2>
        <form method='POST' action = '/users/signup' enctype='multipart/form-data' style="border:1px solid black; width:300px; padding:15px; margin:10px;  align-items:center; text-align:center">
        <input type="text" name="name" placeholder="Enter name" style="padding:15px; margin:10px"/> </br>
        <input type="email" name="email" placeholder="Enter email" style="padding:15px; margin:10px"/></br>
        <input type="password" name="password" placeholder="Enter password" style="padding:15px; margin:10px"/></br>
        <input type="file" name="profilePic" style="padding:15px; margin:10px"/> </br>
        <button type='submit' style="padding:10px; margin:5px; background:green; color:white;">Submit</button>
        </form>
        `)
});

route.post('/signup',upload.single("profilePic"),checkEmail,(req,res)=>{
    console.log(req.body);
    const data = readData();
    const fileData ={
        id: data.users.length >0 ? data.users[data.users.length -1].id+1:1,
        name: req.body.name,
        email:req.body.email,
        password:req.body.password,
        profilePic: req.file.path 
        // profilePic: req.file ? req.file.filename : null,
    }
    
    data.users.push(fileData);
    writeData(data)
    console.log(req.file)
    res.status(201).json({ message: "User created successfully",
       user: fileData
    }
     
    )
})

export default route;