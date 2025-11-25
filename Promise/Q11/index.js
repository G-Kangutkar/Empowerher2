
function displayMessage(name){
    console.log(`Hello, ${name}!`)
}
function getUserInput(name,callbacks){
    
    setTimeout(()=>{

        callbacks(name)
    },1000)
}
getUserInput("Alice",displayMessage)