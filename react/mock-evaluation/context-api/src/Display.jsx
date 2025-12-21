import { useContext } from "react";
import PostContext from "./PostContext";

function Display(){

    const {posts, update, deletePost} = useContext(PostContext);
    return(
        <div>
            {
                posts.map((post)=>{
                    post.title,
                    post.body
                })
            }
            <button onClick={()=>update.id}>Edit</button>
            <button onClick={()=>deletePost.id}>Delete</button>
        </div>

    )

}
export default Display;