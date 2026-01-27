import supabase from "../config/supabase.config.js";

export const addUser= async(req,res)=>{
    try {
        const {name,email,password,age,role,created_at} = req.body;
        const {data,error} = await supabase
        .from('userss').insert([{name,email,password,age,role,created_at}]).select()

        if(error){
            return res.status(400).json({error:error.message})
        }
        res.status(200).json({
            success:true,
            message:'User added successfully!',
            data:data
        })
    } catch (error) {
          res.status(500).json({error:error.message})
    }
}

export const getUsers = async (req,res)=>{
    try {
       
        const {data,error} = await supabase
        .from('userss').select('*').order('name',{ascending:false})

        if(error){
            return res.status(404).json({error:"user not found"})
        }
        res.status(200).json({
            success:true,
            message:"User found",
            data:data
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const getUserById = async(req,res)=>{
    try {
         const {userId} = req.params;
         const {data,error} = await supabase
         .from('userss').select('*').eq('id',userId).single()

         if(error){
            return res.status(404).json({error:"User not found"})
         }
         res.status(200).json({
            success:true,
            message:"User found",
            data:data
         })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const updateUser = async(req,res)=>{
    try {
        const {userId} = req.params;
        const {name, email,password,role} = req.body;
        const {data,error} = await supabase
        .from('userss').update({name, email,password,role}).eq('id',userId).select()

        if(error){
            return res.status(400).json({error:error.message})
        }
        res.status(200).json({
            success:true,
            message:"User updated successfully",
            data:data
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const {userId} = req.params;
        const {data,error}= await supabase
        .from("userss")
        .delete()
        .eq('id',userId)
        .select()

        if(error){
            return res.status(400).json({error:error.message})
        }
        res.status(200).json({
            success:true,
            message:"User deleted successfully",
            data:data
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}