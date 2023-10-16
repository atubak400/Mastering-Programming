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

// 3. User Input Validation

// In this example, we use a while loop to repeatedly prompt the user for input until they enter a valid number. 
// The loop breaks when a valid number is provided.
let userInput;

let validNumber;

while (true) {
    userInput = prompt("Please enter a number:");
    validNumber = parseFloat(userInput);

    if (!isNaN(validNumber)) {
        console.log(`You entered a valid number: ${validNumber}`);
        break; // Exit the loop when a valid number is provided.
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
}


/*
The while statement in JavaScript is a control flow statement that allows you to create a loop. 
It repeatedly executes a specified block of code as long as a given condition is true.
*/


