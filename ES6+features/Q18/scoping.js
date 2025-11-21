//
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
//console.log(x);
/// Output 0f console.log(y) is 20 because var is a global scope variable and 
// output of console.log(x) is refereceError because let is a block scope keyword. 
// as Js cannot access it hence it throwing "X is not defined."

//b) Access the following safely using optional chaining:
{
    const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile.user.details?.email)
console.log(profile.user.details?.phone)
}

//c) Create an example where optional chaining prevents a runtime error when accessing a missing nested property.
{
    const user={
        name:{
            firstname: "Lewis",
            lastname : "Hamilton"
        }
    }
    console.log(user.name?.firstname);
    console.log(user.name?.middlename);
    console.log(user.name?.lastname)
}
