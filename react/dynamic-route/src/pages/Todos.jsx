import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Todos (){
    const [todos,setTodos]=useState([]);
    const navigate= useNavigate();

    useEffect(()=>{
        fetchTodos();
    },[]);

    const fetchTodos= async()=>{
        try{
            const response= await fetch('https://jsonplaceholder.typicode.com/todos');
            if(!response.ok){
                throw new Error('failed at fetching')
            }
            const data = await response.json();
            const first10Todo = data.slice(0,10);

            setTodos(first10Todo);
        }
        catch(err){
            console.error('error at fetching',err);
            
        }
    }

    const handleLogout=()=>{
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
        
    }

    return(
        <>

            <div>
                <h2>Todos</h2>
                <button onClick={handleLogout}>Logout</button>
                <div>
                    {
                        todos.map((todo)=>
                        <Link key={todo.id} to={`/todos/${todo.id}`}>
                            {todo.title}-{todo.completed?"true":'false'}
                        </Link>
                        
                        
                        )
                    }
                </div>

            </div>
        
        
        
        
        </>
    )

}
export default Todos;