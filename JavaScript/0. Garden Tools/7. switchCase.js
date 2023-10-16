// Switch cases allow you to test a single variable or expression against multiple 
// constant values in an organized and readable way

// 1. Basic Structure
const fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("It's an apple.");
        break; // Exit the switch after this case is matched.
    case "banana":
        console.log("It's a banana.");
        break;
    default:
        console.log("It's something else.");
}
// Output: It's an apple.

// 2. It can be used in a function
function processMenuSelection(selection) {
    switch (selection) {
        case "1":
            console.log("You chose Option 1.");
            break;
        case "2":
            console.log("You chose Option 2.");
            break;
        case "3":
            console.log("You chose Option 3.");
            break;
        default:
            console.log("Invalid selection.");
    }
}

processMenuSelection("2"); // Output: "You chose Option 2."