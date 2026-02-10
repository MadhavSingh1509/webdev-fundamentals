// .reduce() = reduce the elements of an array
//to a single value

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);
//accumulator is passed on to the next iteration and element is the 
// current element being processed in the array
function sum(accumulator, element){
return accumulator + element;}
// Order of parameters in reduce() callback function:

// accumulator

// currentValue

// index (optional)

// array (optional)
//EXAMPLE 2: Finding the maximum value in an array
const numbers=[5,10,15,20,34,95];
const maxx=numbers.reduce(maxii);
function maxii(accumulator,element){
    return Math.max(accumulator,element);
}
console.log(`the maxm value of array is ${maxx}`);
//EXAMPLE 3: Flattening an array of arrays
const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrayOfArrays.reduce(flatten, []);
function flatten(accumulator, element) {
  return accumulator.concat(element);
}       
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]