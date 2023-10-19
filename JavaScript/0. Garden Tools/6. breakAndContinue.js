// Break

// 1. loop termination when condition is met
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // This will terminate the loop when i is 3.
    }
    console.log(i);
}
// Output: 0, 1, 2


// 2. Search for a Number in an Array
const numbers = [2, 4, 6, 8, 10];
const target = 6;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        console.log(`Found ${target} at index ${i}.`);
        break; // Exit the loop once the target is found.
    }
}

// 3. Use in Objects

// 3. User Input Validation

// In this example, we use a while loop to repeatedly prompt the user for input until they enter a valid number. 
// The loop breaks when a valid number is provided.

let userInput = "42"; // Predefined user input

let validNumber = parseFloat(userInput);

while (true) {
  if (!isNaN(validNumber)) {
    console.log(`You entered a valid number: ${validNumber}`);
    break;
  } else {
    console.log("Invalid input. Please enter a valid number.");
    break; // This break statement will exit the loop immediately after displaying the error message.
  }
}



/*
The while statement in JavaScript is a control flow statement that allows you to create a loop. 
It repeatedly executes a specified block of code as long as a given condition is true.
*/

// Continue


// 1. skip even numbers in an array
console.log("Numbers Not Divisible by 2")
const numbers2 = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
        continue; // Skip even numbers and continue with the next iteration.
    }
    console.log(numbers2[i]);
}

// 2. Print out Consonants from a Sentence
function removeVowels(inputString) {
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      // Use the continue statement to skip vowels
      if ('aeiouAEIOU'.includes(char)) {
        continue; // Skip the iteration if char is a vowel
      }
      // Add the non-vowel characters to the result
      result += char;
    }
    console.log(result);
  }
  const inputString = "Hello, World!";
  removeVowels(inputString);
  

// 3. Print Numbers Not Divisible by 3
console.log("Numbers Not Divisible by 3")
for (let x = 1; x <= 10; x++) {
    if (x % 3 === 0) {
        continue; // Skip numbers divisible by 3.
    }
    console.log(x);
}

console.log("Another set of numbers Not Divisible by 3")
let i = 1;

while (i <= 10) {
    if (i % 3 === 0) {
        i++; // Increment i to avoid an infinite loop when a multiple of 3 is encountered.
        continue; // Skip numbers divisible by 3.
    }
    console.log(i);
    i++;
}
