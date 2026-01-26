export const todoValidation = (req,res,next)=>{
    const {title} = req.body

    if(!title || title.length === 0){
            return res.status(400).json({error:'Invalid todo title!'})
        }
        next()
}

