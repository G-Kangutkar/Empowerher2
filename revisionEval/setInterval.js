function mySetInterval(callback, delay){
    let timer;
    return function(...args){
        
         clearTimeout(timer);
         timer= setTimeout(()=>{
            callback.apply(this,args)
         },delay)
    }
}

const clock =mySetInterval((id)=>{
    console.log(id)
},100);

clock(2);