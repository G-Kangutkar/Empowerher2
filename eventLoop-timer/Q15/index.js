
const ps = require("prompt-sync");
const prompt = ps();
let countdown= prompt("Enter the number of seconds to start countdown: ");
countdown = parseInt(countdown)
let stop = false;
let runningTime = countdown;

const checkKey = ()=>{
     setTimeout(()=>{
        if(!stop && runningTime >0){
            checkKey()
        }
     },100)
}

let intervaltime=setInterval(()=>{
    console.log(countdown);
    countdown--;
    if(countdown<0){
        console.log("Countdown complete!..")
        clearInterval(intervaltime)
    }
    
    
},1000);
