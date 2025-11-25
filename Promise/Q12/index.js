
function timer(duration, callbacks){
    setTimeout(()=>{
        callbacks(duration)
    },duration)

}
function onComplete(duration){
    console.log(`Timer of ${duration} ms finished`)
}
timer(3000,onComplete)