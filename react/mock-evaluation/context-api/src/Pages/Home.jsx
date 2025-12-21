import { useEffect, useState } from "react";



function Home(){

    
    const [posts, setPosts]=useState([]);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>  response.json()
          
        )
        .then(data => 
            setPosts(data.slice(0,20)))
        .catch(error=> 
            console.error('failed to load')
        )
    },[])


    return(
        <>
        <div>
        <h2>ID: {posts.id}</h2>
        <p>Title: {posts.title}</p>
        <p>Body: {posts.body}</p>
        </div>

        
        </>
    )

}
export default Home;