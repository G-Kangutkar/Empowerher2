import express from "express";
import userRoute from "./routes/users.route.js";
import useTodo from "./routes/todos.route.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/user',userRoute);
app.use('/todos',useTodo);



app.listen(5600,()=>{
    console.log("server is running...")
});