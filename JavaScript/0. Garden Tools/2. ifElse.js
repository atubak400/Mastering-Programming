// 1. Check Age
const age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

// 2. User Authentication
const username = "user";
const password = "password";

if (username === "user" && password === "password") {
    console.log("Authentication successful.");
} else {
    console.log("Authentication failed.");
}

// 3. Grade Evaluation
let score = 67;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// 4. Checking for Array Elements
const myArray = [1, 2, "item", 4, 5]
if (myArray.includes("item")) {
    console.log("Item found in the array.");
} else {
    console.log("Item not found in the array.");
}

// 5. Handling Errors
const errorOccurred = true;

// Checking for errors and displaying a message
if (errorOccurred) {
    console.error("An error occurred, something went wrong.");
} else {
    console.log("No errors.");
}


// 6. Choosing a Path in a Game
let playerChoice = "run";

if (playerChoice === "attack") {
    console.log("You defeated the enemy!");
} else if (playerChoice === "run") {
    console.log("You escaped from the enemy.");
} else {
    console.log("Invalid choice.");
}

