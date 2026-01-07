import Todos from "@/todo/Todos";
import { useState } from "react"
function Navbar({ todos }) {

    const data=todos || [];

    const [filter, setFilter] = useState('all')
    const filteredData = data.filter(t => {
        if (filter === 'completed') {
            return t.completed
        }
        if (filter === 'pending') {
            return !t.completed;
        }
        return true;
    })
    // const handlfilterChange = (newFilter) => {
    //     setFilter(newFilter)
    // }

    return (
        <>
            <nav className="p-5 m-3 bg-teal-600 text-white flex justify-between ">
                <h3 className="text-3xl text-white">Todo Manager</h3>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-rose-400">
                    <option value="all">All Todos</option>
                    <option value="completed">Completed Todos</option>
                    <option value="pending">Pending Todos</option>
                </select>

            </nav>
            <div className="flex text-xl text-center m-4" >
                <aside className="bg-teal-200 w-90" >
                {filteredData && filteredData.map(todo => ( 
                    
                        <div key={todo.id} >
                        <h3 className="bg-rose-700 text-white gap-4 mb-5 w-80 text-center p-2 m-2">{todo.task}</h3>

                    </div>
                   
                    
                ))}
                
                    </aside>
                            
            </div>
        </>
    )
}
export default Navbar;