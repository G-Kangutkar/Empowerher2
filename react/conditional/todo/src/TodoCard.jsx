

function TodoCard ({userId, title,completed}){
    return(
        <>
        <div>
            <h3>User ID: {userId}</h3>
            <h3>Title: {title}</h3>
            <p>Status: {completed?"Completed":"Not Completed"}</p>
        </div>
        </>
        


    )

}
export default TodoCard;