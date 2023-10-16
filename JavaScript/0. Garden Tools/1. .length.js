// String length
const str = "Manchester United";
const length = str.length;
console.log(`The string '${str}' contains ${length} characters.`);

// Array length
const myArray = [1, 2, 3, 4, 5];
const numberOfElements = myArray.length;
console.log(`The number of elements in the array is: ${numberOfElements}`);

// Check if a string is empty
const emptyString = "";
if (emptyString.length === 0) {
  console.log("The string is empty.");
} else {
  console.log("The string is not empty.");
}

// Check if an array is empty
const emptyArray = [];
if (emptyArray.length === 0) {
  console.log("The array is empty.");
} else {
  console.log("The array is not empty.");
}

//Check if an Object has Properties
const myObject = { name: "Alice", age: 30, city: "New York" };
const numberOfProperties = Object.keys(myObject).length;
console.log(`The number of properties in the object is: ${numberOfProperties}`);



