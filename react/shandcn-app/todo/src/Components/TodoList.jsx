import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
function TodoList() {

    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = () => {
        setTodos([...todos, { id: Date.now(), task, complete: false }]);
        setTask('')

    }

    const handleToggle =(id)=>{
        setTodos(todos.map(todo=>todo.id === id ? {...todo, complete:!todo.complete}:todo))
    }

    return (
        <div>

            <div className='w-150 ml-80 mb-9 bg-fuchsia-400 p-5 m-3'>
                <h2>Add Todos</h2><br />
                <Label className='text-xl' htmlFor="email">Enter todo task</Label>
                <Input className='bg-amber-50'
                    id="task"
                    type="text"
                    name='task'
                    value={task}
                    placeholder="Read a book"
                    onChange={(e) => setTask(e.target.value)}
                    required
                /> <br />
                <Button className='bg-green-500 text-white text-lg mt-4 ml-55' onClick={handleSubmit} variant="outline">Submit</Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {todos && todos.map(todo => (
                    <Card key={todo.id} className='w-80 bg-teal-500'>
                        <CardHeader>
                            <CardTitle className={'text-center'}>Todos</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-row gap-4" >
                                <Checkbox checked={todo.complete}  onCheckedChange={() => handleToggle(todo.id)}/>
                                <h3 className="text-lg ${todo.complete ? 'line-through text-gray-500':''}">{todo.task}</h3>
                            </div>
                        </CardContent>
                    </Card>
                )

                )}
            </div>
        </div>

    )
}
export default TodoList;