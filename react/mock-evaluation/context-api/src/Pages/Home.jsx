import { useEffect, useState } from "react";



function Home(){

    const [data, setData]=useState([]);
    const [ error, setError]= useState(null);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if(!response.ok){
                throw new Error('failed to load');
            }
            return response.json()
        }   
        )
        .then(data => 
            setData(data.slice(0,20)))
        .catch(err=> 
            setError(err.message)
        )
    },[])

    if(error){
        return( <div>error:{error}</div>

        )
    }

    return(
        <>
        <div>
        <h2>ID: {data.id}</h2>
        <p>Title: {data.title}</p>
        <p>Body: {data.body}</p>
        </div>

        
        </>
    )

}
export default Home;