
// callback = a function that is passed as an argument
// to another function.

// used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

// "Hey, when you're done, call this next."

function greet(name, callback) {
    console.log("Hello " + name);
    callback();   // calling the callback function
}

function sayBye() {
    console.log("Goodbye!");
}
 
greet("Aditya", sayBye);
//
function f(callback,a,b){
let res=a+b;
callback(res);
}
function f2(result){
    console.log(`the result is ${result}`);
}
f(f2,5,3);
