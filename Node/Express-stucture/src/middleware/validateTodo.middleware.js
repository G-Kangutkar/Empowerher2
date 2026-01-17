const checkValidation =(req,res,next)=>{
    const todo = Object.keys(req.body)
    if(todo.length ===1 && todo[0] === 'title' && typeof req.body.title === "string"){
        next();
    }
    else{
        res.status(400).json({
            message: "Invalid request body. Only 'title' is allowed"
        
    })
}
}

export default checkValidation;