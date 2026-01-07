import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useEffect, useState } from "react"
import axiosService from "@/services/todo.service"
import TodoList from "./TodoList"
import Navbar from "@/components/Navbar"

function Todos({filterData}) {
    const [task, setTask] = useState('');
    const { data, getData, addData, deleteData, updateData, toggle } = axiosService();
    const [editId,setEditId]=useState(false);
    const [selectTask,setSelectTask]=useState(null);
    

    useEffect(()=>{
        getData();
    },[getData])

    const handleInput = () => {
        const newTodo = {
            task: task,
            completed: false
        }
        addData(newTodo);
        setTask('')
    }
    const handleDelete= (id)=>{
        deleteData(id)
    }
     const handlesave = async(id,todo)=>{
        await updateData(id,{task:todo.task, completed: todo.completed})

    }

     const handleToggle =(id)=>{
        toggle(id)
    }

    

    const handleEdit = (todo)=>{
        setSelectTask(todo)
        setEditId(true)
    }
    const handleClose = ()=>{
        setEditId(false);
        setSelectTask(null)
    }

    
   
    return (
        <div >
            
           
            <div className="flex text-xl text-center m-4">

                {/* <Navbar/> */}
                <aside className="bg-teal-200 w-90">
                   
                         <div >
                            <h3 className="bg-rose-700 text-white gap-4 mb-5 w-80 text-center p-2 m-3">{filterData?.task}</h3>
                        </div> 
                    
                </aside>
                <div className="grid grid-cols-1">
                    <div className="flex justify-center items-center text-center">
                        <div className='w-90  mb-9 bg-rose-500 p-5 m-3 text-white'>
                            <h2>Add Todos</h2><br />
                            <Label className='text-xl' htmlFor="email">Enter todo task</Label>
                            <Input className='bg-amber-50 text-black'
                                id="task"
                                type="text"
                                name='task'
                                value={task}
                                placeholder="Read a book"
                                onChange={(e) => setTask(e.target.value)}
                                required
                            /> <br />
                            <Button className='bg-green-600 text-white text-lg mt-4' onClick={handleInput} variant="outline">Add</Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {data && data.map(todo => (
                            <Card key={todo.id} className='w-70 bg-teal-600 ml-2'>
                                <CardHeader>
                                    <CardTitle className={'text-center'}>Todos</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-row gap-4" >
                                        <Checkbox className={'bg-white'} checked={todo.completed} onCheckedChange={() => handleToggle(todo.id)} />
                                        <h3 className={`text-lg ${todo.completed ? 'line-through text-gray-500':''}`}>{todo.task}</h3> <br /> 
                                    </div>
                                    <div className="flex justify-between ml-2">
                                            <Button onClick={()=>handleEdit(todo)} className='bg-green-500 text-white text-lg mt-6 ' variant="outline">Edit</Button>
                                             <Button onClick={()=>handleDelete(todo.id)} className='bg-red-500 text-white text-lg mt-6 ' variant="outline">Delete</Button>
                                        </div>
                                </CardContent>
                            </Card>
                        )

                        )}
                    </div>
                    <TodoList modalOpen={editId} onClose={handleClose} todo={selectTask} onUpdate={handlesave}/>
                </div>

            </div>





        </div>

    )
}
export default Todos;