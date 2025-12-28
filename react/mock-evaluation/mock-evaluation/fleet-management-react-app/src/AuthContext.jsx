import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const useAuth=()=>useContext(AuthContext);
export const AuthProvider=({children})=>{

    const[isLoggedIn, setIsLoggedIn] =useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const saved =localStorage.getItem('isLoggedIn')
        if(saved === 'true'){
            setIsLoggedIn(true);
        }
        
        
    },[]);

    const Login = (email,password)=>{
        if(email === 'admin@gmail.com' && password === 'admin1234'){
            alert('Login Success');
            setIsLoggedIn(true);
            localStorage.setItem('isLoggedIn','true');
            


        }

    }
    return(
        <AuthContext.Provider value={{Login,isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )


}