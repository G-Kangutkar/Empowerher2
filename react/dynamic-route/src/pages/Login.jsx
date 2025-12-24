import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from './Login.module.css'

function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(null);
    const navigate = useNavigate()

    const LoginButton=()=>{
        if(email === 'admin@gmail.com' && password === 'admin@123'){
            localStorage.setItem('isLoggedIn','true');
            navigate('/todos')
            
        }else{
            setError('Invalid password or emaiil')
        }
    }

    return(
        <><nav style={{
            backgroundColor:'#58c0e9ff', color:'white', padding: '10px', margin:'5px', alignItems:"left", fontSize:'bold'
        }}>
            <Link to="/">Home</Link>
        </nav>
        <div className={styles.main}>
        <div className={styles.container}>
            <input className={styles.input} type="email" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} /> <br />
            <input className={styles.input} type="password" value={password} placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} /> <br />
            <button className={styles.button}  onClick={LoginButton}>Login</button>

        </div>
        <p style={{color:'red'}}>{error}</p>
        </div>
        </>
    )

}
export default Login;