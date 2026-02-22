function RateLimiter(fn,limit){
    let count=0;
    return function(...args){
        if(count>=limit){
            return "Time Exceeded"
        }
        count++;
        return fn.apply(this,args);
    }
}
const limit = RateLimiter(()=>"hello",3);
console.log(limit());
console.log(limit());
console.log(limit());
console.log(limit());