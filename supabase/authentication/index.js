import express from "express";
import useRouter from "./routes/user.route.js"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/signup',useRouter);
app.use('/myprofile',useRouter);
app.listen(4500,()=>{
    console.log("server is running")
})