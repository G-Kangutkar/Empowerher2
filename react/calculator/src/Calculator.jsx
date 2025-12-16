import { useState } from "react";
import './Calculator.css';
function Calculator(){

    const [num1,setNum1]=useState('');
    const [num2,setNum2]=useState('');
    const [operation, setOperation]=useState('add');
    const [result, setResult] = useState([]);
    const calculate=()=>{
        const number1 = parseFloat(num1) || 0;
        const number2 = parseFloat(num2) || 0;
        let calculatedResult;
        if(operation === 'add'){
            calculatedResult= number1 + number2;
        }else if (operation === 'subtract'){
            calculatedResult =number1 - number2;
        }else if( operation === 'multiply'){
            calculatedResult =number1 * number2;
        }

        setResult([...result,calculatedResult]);
        //return 0;
    }

//   const handleChange =(e)=>{
//     const {number}= e.target;
//     setNumber(e.target.value)
//   }

    return(
        <>
        <input type="number" value={num1} onChange={(e)=> setNum1(e.target.value)}  /> <br />
        <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)}  /> <br />
        <select value={operation} onChange={(e)=>setOperation(e.target.value)}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
        </select><br />
        <button onClick={calculate}>Perform Action</button> <br />
        <div>
            {result.map((res,index)=>(
                <p key={index}>result:{res}</p>
            ))}
        </div>

        </>
    )

}
export default Calculator;