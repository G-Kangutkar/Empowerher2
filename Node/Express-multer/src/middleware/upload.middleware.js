
import multer from "multer";
// import path from "path";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.config.js"

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder: "user_profiles",
        allowed_formats: ['jpg','png','jpeg']
    }
})
 
export const upload = multer({
    storage,
limits:{
    fileSize:5*1024*1024
},
filefilter : (req,file,cb)=>{
    if(file.mimetype.startsWith("image/")){
        cb(null,true)
    }
    else{
        cb(new Error('only image files allowed'),false )
    }
}

})



// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'./uploads')
//     },
//     filename:(req,file,cb)=>{
//         const ext = path.extname(file.originalname);
//         cb(null, `profile-${Date.now()}${ext}`)
//     }
// });

// const filefilter = (req,file,cb)=>{
//     if(file.mimetype.startsWith("image/")){
//         cb(null,true)
//     }
//     else{
//         cb(new Error('only image files allowed'),false )
//     }
// };

// export const upload = multer({
//     storage,
//     filefilter,
//     limits: {fileSize: 1*1024*1024}
// });