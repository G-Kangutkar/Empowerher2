
console.log("Begin");            //direct task
 setTimeout(() => { console.log("Timeout Task"); }, 0);      //macrotask
 Promise.resolve().then(() => { console.log("Promise Task"); });  ///microtask
 console.log("End");       //direct task

 /// there were no issue with the code. 
 ///it follows :(outputs:)
 // 1.Begin
// 2.End
// 3.Promise Task
// 4.Timeout Task
//why above order:
// Js executes line by line code. Its first priority is to executes direct task/functions.
// second priority is to executes microtask i.e promise callbacks, async await, queueMicrotask.
// third priority is to executes macrotask i.e setTimeout, setInterval, i/o operations, user interaction(event, click)
// Js event loop uses two types of task queues to manage asynchronous operations called as "Microtask" and "Macrotask".
