import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";


function Login(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const loginRef=useRef(null);
    const navigate = useNavigate();
    const {login} =useAuth();

    
    const handleLogin = ()=>{
        if(login(email,password)){
            navigate('/admin')
    
    }else{
            alert('Wrong email or password')

        }
    }

    return(
        <>
            <div>
                <input type="email" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} ref={loginRef} /> <br />
                <input type="password" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} /> <br /> <br />
                <button onClick={handleLogin}>Login</button>
            </div>
        
        
        </>
    )



}
export default Login;