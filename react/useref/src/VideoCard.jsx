import { useRef } from "react";

function VideoCard (){
    const videoRef = useRef(null);
    const play=()=>{
        videoRef.current.play()
    }
    const pause=()=>{
        videoRef.current.pause()
    }
    const forward=()=>{
        videoRef.current.currentTime += 5
    }
    const rewind=()=>{
        videoRef.current.currentTime -= 5
    }

    return(
        <>
        <video src="https://www.w3schools.com/html/mov_bbb.mp4" ref={videoRef}></video> <br />
        <button onClick={play}>▶️ Play</button>
        <button onClick={pause}>⏸ Pause</button>
        <button onClick={forward}>⏩ Forward</button>
        <button onClick={rewind}>⏪ Rewind</button>
        </>

    )
}
export default VideoCard;