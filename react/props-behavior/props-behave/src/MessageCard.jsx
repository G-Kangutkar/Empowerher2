function MessageCard (props){
    return(
        <>
        <div className="main">
        <div className="message"> 
            <p>title: {props.title}</p>
            <p>Message: {props.message}</p>
        </div>
        </div>
        </>

    )
}
export default MessageCard;