import express from "express";
import readFile from "./read.js";
import os from "os";
import dns from "dns";

const app =express();

app.get('/test',(req,res)=>{
    res.send("Test route is working!")
})

app.get('/readfile',(req,res)=>{
    const content = readFile();
    res.send(content)
});

app.get("/systemdetails",(req,res)=>{
    try {
        const platform = os.platform();
    const totalMemory = (os.totalmem()/(1024** 3)).toFixed(2);
    const freeMemory = (os.freemem()/(1024** 3)).toFixed(2);
    const cpuModel = os.cpus()[0].model;
    const totalCPU = os.cpus().length;

    res.send({
        "platform" : platform,
        "totalMemory": totalMemory,
        "freeMemory": freeMemory,
        "cpuModel":cpuModel,
        "totalCPU core":totalCPU
    });
        
    } catch (error) {
        console.log(error.meassage)
    }
    
});

app.get('/getip',(req,res)=>{
    const hostName = "masaischool.com";
    dns.lookup(hostName, (err,address)=>{
        if(err){
            res.send(err.meassage)
        }
        else{
            res.send({
                "hostName":hostName,
                "IP address": address
            })
        }
    })
})

app.listen(4000,()=>{
    console.log("server is running")
})