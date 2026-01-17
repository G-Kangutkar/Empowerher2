import express from "express";
import useTodos from "./routes/todos.routes.js"
import loggerMiddleware from "./middleware/logger.middleware.js";

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

const PORT =3000
app.use('/todos',useTodos)
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});