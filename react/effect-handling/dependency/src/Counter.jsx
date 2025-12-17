import { useEffect } from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function handleCount() {
        setCount((prev) => prev + 1)


    }
    useEffect(() => {
        if ( count !== 0 && count % 3 === 0) {
            alert(`The current number ${count} is divisible by 3`);
        }
    }, [count])




    return (
        <>
            <div>
                <h2> Count is: {count}</h2>
                <button style={{border:'2px solid purple'}} onClick={handleCount}>Increase Count</button>
            </div>
        </>
    )
}
export default Counter;