import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
function TodoList({modalOpen,onClose,todo,onUpdate}){

    const [task,setTask] =useState('');

    useEffect(()=>{
        if(todo){
            setTask(todo.task || '')
        }
    },[todo]);

    const handleSubmit = async()=>{
        if(!task.trim()){
            return;
        }
        try{
            await onUpdate(todo.id, {task:task.trim(),completed:todo.completed});
            onClose();
        }
        catch(error){
            console.error('Failed to update',error)

        }
    }

    return(
         <Dialog open={modalOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogDescription>
            Make changes to your todo here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Task</Label>
            <Input
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter todo title"
              className="col-span-3"
              
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button 
            type="button" 
            onClick={handleSubmit} 
          >
          Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )
}
export default TodoList;