import {readFileSync} from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname,'../db.json')
const checkEmail =(req,res,next)=>{
    const rawdata = readFileSync(dbPath,'utf-8');
    const data = JSON.parse(rawdata)
    const email = req.body.email
    const user = data.users.find(el=> el.email === email)
    if(user){
         return res.status(409).json({error:"Email already exists"})
    }
    else{
       next()
    }

}
export default checkEmail;