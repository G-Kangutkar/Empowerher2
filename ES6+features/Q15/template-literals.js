//a) Create a variable username and course and print: "Hello , welcome to the course!" using template literals.
let username = 'Alex';
let course = 'Web development'
console.log(` Hello ${username}!, Welcome to the ${course}`)

//b) Convert the below object into shorthand syntax:
{
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet () {
    console.log("Hello");
  }
};
student.greet()
}

//c) Create a function getFullName(first, last) using arrow function shorthand (no return keyword).
{
    const getFullName=(first,last)=>({first,last})
    console.log(getFullName('Alex','Albon'))
}