import { displayTodos } from "./displayTodos.js";
let allTodos = [];
async function fetchTodos() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        allTodos = data;
        displayTodos(allTodos);
    }
    catch(error){
        console.log('Error fetching todos')
    }
    
}
fetchTodos();