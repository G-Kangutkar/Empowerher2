function runSequential(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(tasks){
               resolve("task done") 
            }
            else{
                reject("task failed")
            }
        },2000)
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