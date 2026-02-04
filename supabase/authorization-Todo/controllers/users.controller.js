import supabase from "../config/supabase.config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const signup = async (req,res)=>{
    try {
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({error:"name, email and password is required field"})
        }

        const {data:existing,error:newError} = await supabase
        .from('userss').select().eq('email',email)

        if(newError){
            return res.status(400).json({error:newError.message})
        }
        if(existing && existing.length > 0){
            return res.status(409).json({error:"Email is already existed"})
        }

        const hashedPass = await bcrypt.hash(password,10);
        const {data,error} =await supabase
        .from('userss').insert([{email,name,password:hashedPass}])

        if(error){
            return res.status(400).json({error:error.message})
        }

        res.status(200).json({
            message:"User registered successfully!"
        })


    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

export const login = async (req,res)=>{
    try {
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"email and password is required"})
        }

        const {data,error} = await supabase
        .from('userss').select().eq('email',email).maybeSingle()

        if(error){
            return res.status(400).json({error:error.message})
        }

        if(!data ){
            return res.status(404).json({error:"User not found"})
        }


        const isMatch = await bcrypt.compare(password,data.password);
        if(!isMatch){
            return res.status(401).json({error:"Invalid credentials"})
        }
        const token = jwt.sign(
            {id:data.id, email:data.email},process.env.JWT_SECRET,{expiresIn:"1h"}
        )

        res.status(200).json({
            message:"login successfully!",
            id:data.id,
            name:data.name,
            token:token
        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}