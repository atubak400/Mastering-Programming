// 1. Write an arrow function that takes two numbers as arguments and returns their sum.

const add = (a, b) => a + b;

// or

/* function add(a, b) {
    return a + b;
}
*/

let result = add(5, 7); 
console.log(result);    


// 2. Create an arrow function that takes a name and returns a greeting string.

const greet = name => `Hello, ${name}!`;

// or

/* 
function greet(name) {
    return `Hello, ${name}!`;
}
*/

let greeting = greet("Alice");
console.log(greeting); 


// 3. Create an arrow function that takes a string and returns the number of characters in the string.

const countCharacters = str => str.length;

// or

/* 
function countCharacters(str) {
    return str.length;
}
*/

let message = "Hello, World!";
let characterCount = countCharacters(message);
console.log(characterCount);


// 4. Write an arrow function that takes an array of numbers and returns the maximum number in the array.
const findMax = arr => Math.max(...arr);

// or

/* 
function findMax(arr) {
    return Math.max(...arr);
}

In JavaScript, the ... operator is known as the spread operator. 
When used in function calls, it "spreads out" the elements of an array or an iterable object. 
This is necessary for the Math.max() function, as it expects a list of arguments, 
not a single array argument. If you pass arr directly without the Spread Operator to Math.max(), 
the function receives the entire array as a single argument. 
Since Math.max() is designed to take multiple arguments (e.g., Math.max(1, 2, 3)), 
passing an array directly (like Math.max([1, 2, 3])) would not work as intended. 
It would treat the whole array as one argument and would not be able to compare individual elements.
*/

let numbers = [3, 5, 7, 1, 9, 2];
let maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 9


// 5. Write an arrow function that takes an array of numbers and returns a new array with each number doubled.
const doubleNumbers = arr => arr.map(num => num * 2);

// or

/* 
function doubleNumbers(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
}

The .map() method goes through each element of arr.
For each element in arr, the function inside .map() is executed. 
In this case, the function takes an element, num(this can be anything e.g i) and returns num * 2, 
effectively doubling the value.

The beauty of .map() is that it does not change the original array (arr in this case). 
Instead, it produces a new array with the transformed values.
*/

let originalNumbers = [1, 2, 3, 4, 5];
let doubledNumbers = doubleNumbers(originalNumbers);
console.log(doubledNumbers);
