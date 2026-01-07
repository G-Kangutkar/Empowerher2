import { useCallback, useState } from "react";
import api from "./axiosInstance";

function axiosService(){
    const [data,setData]=useState([]);

    const getData=useCallback(async()=>{

        try {
            const response = await api.get(`/todos.json`);
            if(response.data && typeof response.data === 'object'){
                const todosArray = Object.keys(response.data).map(key=>({
                    id:key,
                    ...response.data[key]
                }));
                setData(todosArray);
                return todosArray;
            }
            else{
                setData([]);
                return [];
            }
        } catch (error) {
            console.log(error)
            
        }

    },[]);

    const addData = useCallback(async(newData)=>{
        try {
            const response =await api.post(`/todos.json`,newData);
            const newtodoWithId = {
            id:response.data.name,
            ...newData
        }
        setData(prev=>[...prev,newtodoWithId]);
        return newtodoWithId;
            
        } catch (error) {
            console.log(error)
        }

    },[]);

    const updateData = useCallback(async(id,newTodo)=>{
        try {
            const response = await api.put(`/todos/${id}.json`,newTodo);
            const updatedTodo = {id, ...response.data};
            setData(prev=>prev.map(item=>item.id=== id? updatedTodo:item));
            return updatedTodo
        } catch (error) {
            console.log(error)
        }
    },[]);

     const toggle =async(id)=>{
        const todo = data.find(t=>t.id === id)
        if(!todo) return
        const updatedTodo = {...todo,completed: !todo.completed}
        await updateData(id,updatedTodo);
        // setData(prev=>prev.map(todo=>todo.id === id ? updatedTodo:todo))
    }

    const deleteData =useCallback(async(id)=>{
        try {
            // const response = 
            await api.delete(`/todos/${id}.json`);
            setData(prev=>prev.filter(item=>item.id !== id));
            // return response.data
            
        } catch (error) {
            console.log(error)
        }

    },[]);
    return {data, getData, addData,deleteData, updateData,toggle}
}
export default axiosService;