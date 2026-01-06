import { useState } from "react";
import { useAuth } from "../Components/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

function Login(){

    const {login}=useAuth();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const navigate = useNavigate();

    const handleLogin=()=>{
        if(login(email,password)){
            alert('Login Suceess');
            navigate('/admin');
        }
        else{
            alert('Invalid email or password')
        }
    }

    return(
        <> <div style={{padding:'20px',margin:'10px', paddingTop:'50px', }}>
            <div style={{textAlign:'center',marginLeft:'40%',width:'fit-content',backgroundColor:'#ddb919ff', padding:'20px'}}>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{padding:'15px' , margin:'10px'}} /> <br />
            <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{padding:'15px' , margin:'10px'}} /> <br />
            <button style={{backgroundColor:'green', padding:'10px',margin:'2%', fontWeight:'bold',  }} onClick={handleLogin}>Login</button>
            </div></div>
        
        </>
    )

}
export default Login;