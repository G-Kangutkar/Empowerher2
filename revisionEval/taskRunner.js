function runSequential(tasks,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(tasks){
               resolve("task done") 
            }
            else{
                reject("task failed")
            }
        },delay)
    })
}
async function getTask(){
    try {
        const data = await runSequential();
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}