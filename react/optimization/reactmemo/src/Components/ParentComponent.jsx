import { useCallback } from "react";
import { useState } from "react";

function ParentComponent(){

    const [count,setCount]=useState(0);

    const handleIncrement = ()=>{
        setCount(count+1)
    }

    return(
        <>
        <div style={{backgroundColor:'greenyellow', padding:'20px', margin:'10px'}}>
            <p>Counter: {count}</p>
            <button style={{backgroundColor:'#08809eff', padding:'10px', margin:'5px'}} onClick={handleIncrement}>Increment</button>
        </div>
        </>
    )
}
export default ParentComponent;
