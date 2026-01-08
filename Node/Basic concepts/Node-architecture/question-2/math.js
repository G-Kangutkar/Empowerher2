export function checkPrime(num){
    let flag=0;
    for(let i=1;i<=num;i++){
        if(num%i === 0){
            flag++;
        }
    }

   return flag === 2;

}