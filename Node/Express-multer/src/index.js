import dotenv from "dotenv";
dotenv.config();
import express from "express";
import route from "./routes/users.routes.js";

const app = express();
app.use(express.json());

app.use("/users",route);

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})