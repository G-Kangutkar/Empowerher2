// a) Use spread operator to merge:
{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5];
    let arr3 = [...arr1, ...arr2]
    console.log(arr3)

}

//b) Create a function sum(...nums) using rest operator that returns the sum of all numbers.
{
    const sum = (...nums) => nums.reduce((a,b)=>a+b,0)
    console.log(sum(1,2,3,4))
}
//Extract:name city pin
{
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const {
    name,
    address: {
        city, pin
    }

}=user
console.log(`My name is ${name}, city ${city} ,pin ${pin}`)
}

