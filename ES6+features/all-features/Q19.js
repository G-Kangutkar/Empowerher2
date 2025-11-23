// //a) Print: "5 + 7 = 12" using a template literal where the result is calculated inside ${ }.
// b) Create a multi-line string using template literals (3 lines).
// c) Given firstName = "John" and lastName = "Doe", print the full name using a template literal.
{
    let res = 5+ 7;
    console.log(`5 + 7 = ${res}`);

    console.log(`
    Hello, welcome to book club \n today we are going to read new book \n today's book is Powerful.
        `)

    let firstName ='John';
    let lastName = 'Doe';
    console.log(`${firstName} ${lastName}`)
}
// arrow function and this
{
    const square=(n)=>  n*n
    console.log(square(5))

    const obj = {
    value: 50,
    test: () => console.log(this.value)
    };
    obj.test();
    // cause arrow function don't have its own this keyword.


    // c) Rewrite it using a normal function so that printing works.
     
    const obj1 = {
    value: 50,
    test() { console.log(this.value)} 
    };
    obj1.test();

}
//rest, speard
{
    const product = { name: "Pen", price: 10 };
    let prod = {...product};
    console.log(prod);

    const a = { x: 1 };
    const b = { y: 2 };
    let c = { ...a, ...b}
    console.log(c)

    const maxValue=(...nums) => nums.reduce( (a,b) => a>b?a:b,0 )
    
    console.log(maxValue(1,4,3,2))

}
// Destructuring & Optional Chaining
{
    const arr = [10, 20, 30];
    const [a,b,]= arr
    console.log(a,b)

    const laptop = { brand: "Dell", ram: "8GB" };
    const{
        brand,ram

    } = laptop
    console.log(brand)

    const info = {};
    console.log(info?.name)
}

// scoping
{
    for (var i = 0; i < 3; i++) {}
    console.log(i);
    // it will print 3 cause var is global scope and i is ran 3 times.
    for (let j = 0; j < 3; j++) {}
   // console.log(j);
    //it will show refernce error cause let is a block scope keyword and it cannot be access outside of this block hence Js telling j is not defined
    //Why is const used for values that should not be reassigned?
    /// because for readablity that tells this particular value is need to be unchanged.
    //preventing error that cause by accidentally reassigning the variables that need to be stay constant.
}
// Ternary Operator 
{
    let speed=(kmph)=>kmph>60?'Fast':"Normal"
    console.log(speed(49));

    const age=(n)=>n>=18?"Adult":"Minor"
    console.log(age(25))

    let num=(n)=>n>0?"Positive":n<0?"Negative":"Zero"
    console.log(num(56))
   // console.log(num(-56))
   // console.log(num(0))
}
// Spread, Rest & Array
{
    const nums = [1,2,3];
    const num = [...nums,4,5]
    console.log(num)

    a = ["x","y"];
    b = ["z"];
    c=[...a,...b]
    console.log(c)

    const printNames=(...name)=>{return name}
    console.log(printNames("A","B","c"))


}
// Object Destructuring & Shorthand
{
    const user1 = { id1: 101, status: "active" };
    const{id1,status}=user1;
    console.log(id1,status)

    // const id = 101;
    // const role = "admin";
    // const user = {
    //  id,
    //  role
    // };

    const firstName = "Charles";
    const age = 26;
    const info ={
        firstName,age,
        res(){
            console.log("Hello")
        }
    }
    info.res()

}
{
    let date = new Date().toDateString()
    console.log(`Today is ${date}`)

    let Name= 'Charles';
    let score=79;
    console.log(`Hello ${Name}, your score is ${score}/100`)
}

{
    const sum=(a,b)=>a+b;
    console.log(2,6)

    const isAdult=(age)=>age>=18?"true":"false";
    console.log(isAdult(32))

    const double=(n)=>n+n;
    console.log(double(7))
}
{
    const arr = [1,2,3,4]
    const arr2=[...arr]
    console.log(arr2)

    const arr3 = [100,...arr]
    console.log(arr3)

    const obj={name:'Charles',age:26}
    const obj2 = {age:27, city:'Monaco'}
    const obj3= {...obj,...obj2}
    console.log(obj)


}
{
    const user = {
    name: "Alex",
        address: {
          city: "Bangalore"
        }
    };
    console.log(user.address?.city)
    console.log(user.address?.title)

    const info={
        car:"F1",
            model:{
                name:'Ferari'
            }
    }
     console.log(info.model?.title)
}

