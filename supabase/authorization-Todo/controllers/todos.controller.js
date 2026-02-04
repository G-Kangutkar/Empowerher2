import supabase from "../config/supabase.config.js";

export const postTodo = async (req,res)=>{
    try {
        const {title, completed} = req.body;
        if(!title){
            return res.status(400).json({error:"Title is required"})
        }

        const todoData = {title, user_id: req.user.id}
        if(completed !== undefined){
            todoData.completed =completed
        }
        
        const {data,error}= await supabase
        .from('todos').insert([todoData]);
        if(error){
            return res.status(400).json({error:error.message})
        }
        res.status(201).json({message:"TODO is created successfully!",data});

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const getTodo = async (req,res)=>{
    try {
        const userId = req.user.id;

        const {data,error} = await supabase
        .from('todos').select().eq('user_id',userId)

        if(error){
            return res.status(400).json({error:error.message})
        }

        res.status(200).json({
            message:"Todos",
            data
        })
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const updateTodo = async (req,res)=>{
    try {
        const userId = req.user.id;
        const {title, completed} = req.body;
        const {id} =req.params;
        if( !id){
            return res.status(400).json({error:"id is required"})
        }
        if( !userId){
            return res.status(400).json({error:"userId is missing"})
        }
        const {data,error} = await supabase
        .from('todos').update({title,completed}).eq('id',id).eq('user_id',userId).select();

        if(error){
            return res.status(400).json({error:error.message})
        }
        if(!data || data.length === 0){
            return res.status(404).json({error:"Todo not found"})
        }
        res.status(200).json({
            message:"Updated Todos",
            data
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const deleteTodo = async (req,res)=>{
    try {
        const {id} =req.params;
        // console.log('id',id)
        const userId= req.user.id;
        if( !id){
            return res.status(400).json({error:"id is required"})
        }
        if( !userId){
            return res.status(400).json({error:"userId is missing"})
        }

        const {data,error}= await supabase
        .from('todos').delete().eq('id',id).eq('user_id',userId).select()
        // console.log('data',data)
        if(!data || data.length === 0){
            return res.status(404).json({error:"Todo not found"})
        }
        if(error){
            return res.status(400).json({error:error.message})
        }

        res.status(200).json({
            message:"deleted Todos successfully",
            data
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}