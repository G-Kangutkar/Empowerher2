//a) Write an arrow function isEven(n) that returns true if even, else false.
{
const isEven=(n)=>{
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(4))
console.log(isEven(5))
}
//b) Rewrite the following using a ternary operator:
{
    const result=(marks)=>marks>=35 ? 'Pass':"Fail";
 console.log(result(56))

}
//c) Write an arrow function greet(name) that prints: "Hello, " If no name is passed, print "Guest" using the ternary operator
{
    const greet=(name)=>name?'Hello':'Guest'
    console.log(greet());
    console.log(greet('Alex'));
}
