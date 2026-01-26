import express from "express";
import dotenv from "dotenv";
dotenv.config();
import useUser from "./routes/users.routes.js";
import useTodo from "./routes/todos.routes.js";
const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.use('/users',useUser);
app.use('/todos',useTodo);

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});
