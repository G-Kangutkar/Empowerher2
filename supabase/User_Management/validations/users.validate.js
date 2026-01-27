import supabase from "../config/supabase.config.js";

export const checkInputField = async(req,res,next)=>{
    try {
        const {name,email,password,age} = req.body;

    if(!name || !email || !password ){
        return res.status(400).json({error:"Something is missing from input field"})
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(email)
    if(!emailValid){
        
        return res.status(400).json({error:"Email is invalid"})
    }
    if(password.length < 8){
        return res.status(400).json({error:"Password must be more than 8 characters.."})
    }
    if(age < 18){
        return res.status(400).json({error:"age should be 18 or more"})
    }
    const {data}= await supabase
    .from('userss').select().eq("email",email).single()
    if(data){
        return res.status(409).json({error:"Email already exists"})
    }

    next()
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    

    
}

export const checkUserId = async(req,res,next)=>{ 
    try {
     const {userId} = req.params;
     const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

     if(!uuidRegex.test(userId)){
        return res.status(406).json({error:"Invalid userId"})
     }
     const {data,error} = await supabase
    .from('userss').select().eq("id",userId).single()

    if(!data){
        return res.status(400).json({error:"User of this userId doesn't exist"})
    }
    if(error){
        return res.status(400).json({error:error.message})
    }
    next()
    
} catch (error) {
    return res.status(500).json({error:error.message})
}
   
}