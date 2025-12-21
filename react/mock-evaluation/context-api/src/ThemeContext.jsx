import { createContext, useState } from "react";

 const ThemeContext = createContext();
 export const ThemePovider=()=>{
    const [isChange, setChange]=useState(true);
    const BackColor = isChange?"white":"black";
    const toggle=()=>{
        setChange(!isChange)
    }
    return(

        < >
        <div ></div>
         <button onClick={toggle} >Click</button>
        </>
    )

 }
 export default ThemeContext;