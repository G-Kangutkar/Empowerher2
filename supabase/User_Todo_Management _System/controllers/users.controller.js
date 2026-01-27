import supabase from "../config/supabase.config.js";

export const sigupUser = async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const {data,error} = await supabase
        .from('users').select().eq('email',email)

        if(error){
            return res.status(400).json({error:error.message})
        }
         if(!name || !email|| !password ){
            return res.status(400).json({error:'Something is missing!'})
        }
        if(data){
            return res.status(409).json({error:'Email already exists'})
        }
        const {data: addUser, error:newError } = await supabase
        .from('users').insert([{name,email,password}]).select();
        if(newError){
            return res.status(400).json({error:error.message})
        }
       res.status(200).json({success:true,
        message:"user created",
        data:addUser
       })
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}
export const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const {error}= await supabase
        .from('Users')
        .delete()
        .eq('id',id)
        .select()
        if(error){
            return res.status(400).json({error:error.message})
        }
        res.status(200).json({
            success:true,
            message:"User deleted with all it's todos"
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}