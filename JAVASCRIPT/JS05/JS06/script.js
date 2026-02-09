// forEach() is used when:
// 1. You want to perform an action for each element in an array.
//example 1:
let numbers=[2,3,4,8,9];
numbers.forEach(display);
function display(value){
    console.log(value);}


    // Example array
let arr = [1, 2, 3, 4, 5];

// Using forEach to print each element and its square
arr.forEach(function(num, index) {
    console.log("Element at index " + index + " is " + num);
    console.log("Square:", num * num);
});

