import React,{useState} from "react";

function Counter(){

    const [count,setCount] = useState(0);
    const increment=()=>{
        setCount(count+1);
    }


    return(
        <>
        <h3>Count: {count}</h3>
        <button style={{border:"2px solid purple", backgroundColor:"green", color:"white"}} onClick={increment}>Increment</button>
        </>
    )
}
export default Counter;