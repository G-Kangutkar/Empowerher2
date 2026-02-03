import supabase from "../config/supabase.config.js";
import bcrypt from "bcrypt";

export const signup = async(req,res)=>{
    try {
        const {name,email,age,location,password} = req.body;

        if(!name || !email || !age || !location || !password){
            return res.status(400).json({
                error:"name,email,age,location,password are required"
            })
        }

        const hashedPass = await bcrypt.hash(password,10);

        const {data:existing,error:newError} = await supabase
        .from("users").select().eq('email',email)

        if(newError){
            return res.status(400).json({error:newError.message})
        }

        if(existing && existing.length > 0){
            return res.status(409).json({error:"email already existed"})
        }
        const {data, error} = await supabase
        .from('users').insert([{name,email,age,location,password:hashedPass}])

        if(error){
            return res.status(400).json({error:error.message})
        }
        res.status(201).json({
           message: "User registered successfully"
}
)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


export const login = async (req,res)=>{
    try {
        const {name } = req.query;
        const {data, error} = await supabase
        .from('users').select().eq('name',name).maybeSingle()

        if(!data){
            return res.status(404).json({error:"user not found"})
        }

        res.status(200).json({
            status:true,
            id:data.id,
            name:data.name,
            email:data.email,
            age:data.age,
            location:data.location

        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}