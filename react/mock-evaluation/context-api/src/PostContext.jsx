import { createContext, useState } from "react";

const PostContext = createContext();
export const PostProvider=({children})=>{
    const[ posts, setPosts]= useState([]);
    const readPost =()=>{
        setPosts()
    }
    const update=(text)=>{
        setPosts([...posts, {body: text}])
    }
    const deletePost=(id)=>{
        setPosts(posts.filter((post)=>post.id !==id))

    }
    return(
        <PostContext.Provider value={{posts, readPost, update, deletePost}}>
            {children}
        </PostContext.Provider>
    )

}

export default PostContext;
