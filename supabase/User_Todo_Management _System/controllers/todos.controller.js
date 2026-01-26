import supabase from "../config/supabase.config.js";

export const addTodo = async(req,res)=>{
    try {
        const {title,description,user_id} = req.body;
        const {data,error}= await supabase
        .from('todos').insert([{title,description,user_id}]).select();

        if(error){
            return res.status(400).json({error:error.message})
        }
        res.status(200).json({
            success:true,
            message:'Todo added',
            data:data
        })
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
};

export const getTodos =async(req,res)=>{
    try {
        const {userId} =req.params;
        const {data,error}=await supabase
        .from('todos')
        .select('*')
        .eq('user_id',userId)
        .single()
        if(error){
            return res.status(404).json({error:'Todos not found for this user'})
        }
        res.status(200).json({
            success:true,
            message:"Todos found",
            data:data
        })

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
};

export const updateTodo = async(req,res)=>{
    try {
        const {todoId} =req.params;
        const {title,description,is_completed} = req.body;

        const {data:todo,error:todoError} =await supabase
        .from('todos').select('*').eq('id',todoId)

        if(!todo){
           return res.status(404).json({error: "Todo not found"})
        }
        if(todoError){
           return res.status(404).json({error: todoError.message})
        }

        const {data,error} = await supabase
        .from('todos')
        .update({title,description,is_completed})
        .eq('id',todoId)
        .select()

        if(error){
            return res.status(400).json({error:error.message})
        }
        res.status(200).json({
            success:true,
            message:"Todo updated",
            data:data
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const deleteTodo = async (req,res)=>{
    try {
        const {todoId} = req.params;
        const {data,error} = await supabase 
        .from('todos')
        .delete()
        .eq('id',todoId)
        .select()
        if(error){
            return res.status(400).json({error: error.message})
        }
        res.status(200).json({
            success:true,
            message:'Todo deleted',
            data
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}