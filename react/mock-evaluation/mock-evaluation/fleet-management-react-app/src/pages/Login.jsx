import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [isLogin,setIsLogin]=useState(false);
    const loginRef=useRef(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const saved =localStorage.getItem('isLoggedIn')
        if(saved){
            setIsLogin(true);
        }
        
        
    },[]);

    const handleLogin = (email,password)=>{
        if(email === 'admin@gmail.com' && password === 'admin1234'){
            alert('Login Success');
            setIsLogin(true);
            localStorage.setItem('isLoggedIn','true');
            navigate('/admin')


        }
        return alert('Wrong email or password')

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