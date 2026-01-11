import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

app.get("/students",(req,res)=>{
    let data = fs.readFileSync('./db.json',"utf-8");
    let parsedData = JSON.parse(data);
    let students = parsedData.students
    res.json(students);
});

app.post("/students",(req,res)=>{
    // read the file
    let data = fs.readFileSync('./db.json',"utf-8");
    // convert string to json format (object)
    let parsedData = JSON.parse(data);
    // get students from entire obj 
    let students = parsedData.students;
    // checking if id is more than 0 if yes then adding 1 in it , no then its 1
    let newId = students.length >0? students[students.length-1].id+1:1;
    // data tobe added
    let newStudent = {
        id:newId, 
        name:req.body.name, 
        course:req.body.course, 
        year:req.body.year
    }
    // push 
    students.push(newStudent);
    // convet it into string
     let stringifyData = JSON.stringify(parsedData);
    //  save in db
    fs.writeFileSync("./db.json",stringifyData);
    res.json({message:"Student added"})

});

app.put("/students",(req,res)=>{
    let data =fs.readFileSync("./db.json","utf-8");
    let parsedData =JSON.parse(data);
    let students = parsedData.students;
    // need to give id in body => body
    let studentId = parseInt(req.body.id);
    let newCourse = { course: req.body.course}
    // check id and update 
    let filteredStudent = students.map((el)=> el.id === studentId ? {...el, ...newCourse}:el);
    parsedData.students = filteredStudent;
    let stringifyData = JSON.stringify(parsedData);
    fs.writeFileSync("./db.json",stringifyData);
    res.json({message:"Updated course field"})


});

app.delete("/students/:id",(req,res)=>{
    let data = fs.readFileSync("./db.json","utf-8");
    let parsedData = JSON.parse(data);
    let students = parsedData.students;
    // giving id at url => params
    let studentId = parseInt(req.params.id)
    let filteredStudent = students.filter((el)=> el.id !== studentId);
    if(filteredStudent.length === students.length){
        res.json({message:"Student not found"});
        return
    }
    parsedData.students = filteredStudent;
    let stringifyData = JSON.stringify(parsedData);
    fs.writeFileSync("./db.json",stringifyData);
    res.json({message:"Delete student data"})
});

app.listen(5000,()=>{
    console.log("Server is running....")
});