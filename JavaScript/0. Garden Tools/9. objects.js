// Different instances where Javascript Object can be used

// 1. Define the student record object
// Create a JavaScript program that defines a student record using an object. 
// The student record should include the following information for a single student:
// Student's name (a string).
// Student's age (a number).
// Student's grade (a string, e.g., "A", "B", "C").
// An array of subjects that the student is taking (an array of strings).

const studentRecord = {
    name: "John Doe",
    age: 20,
    grade: "A",
    subjects: ["Math", "Science", "History"]
};

// Print the student's information
console.log("Student Record:");
console.log("Name: " + studentRecord.name);
console.log("Age: " + studentRecord.age);
console.log("Grade: " + studentRecord.grade);
console.log("Subjects: " + studentRecord.subjects.join(", "));

// 2. Create a Personal Information Card

// Create a JavaScript program that represents a personal information card using an object. 
// The personal information card should include the following information:
// 
// Name (a string).
// Age (a number).
// City (a string).
//
// Your task is to:
// Define an object called personalInfo with the mentioned properties.
// Print the personal information to the console in a user-friendly format.

// Define the personal information object
const personalInfo = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

// Print the personal information
console.log("Personal Information Card:");
console.log("Name: " + personalInfo.name);
console.log("Age: " + personalInfo.age);
console.log("City: " + personalInfo.city);


// 3.  Create a Product Catalog

// Create a JavaScript program that represents a catalog of products using objects. 
// Each product in the catalog should have the following information:

// Product name (a string).
// Price (a number).
// Your task is to:
// 
// Create an array of product objects, with each object representing a different product.
// Implement a function that calculates and returns the total price of all products in the catalog.
// Add at least three products to your catalog.

// Define product objects
const product1 = {
    name: "Widget",
    price: 10.99
};

const product2 = {
    name: "Gadget",
    price: 29.99
};

const product3 = {
    name: "Doodad",
    price: 5.49
};

// Create an array to store the products
const productCatalog = [product1, product2, product3];

// Function to calculate total price
function calculateTotalPrice(catalog) {
    let totalPrice = 0;
    for (const product of catalog) {
        totalPrice += product.price;
    }
    return totalPrice;
}

// Test the function
const total = calculateTotalPrice(productCatalog);
console.log("Total Price of Products: $" + total.toFixed(2));



// 4. Create a Book Catalog
//Create a JavaScript program that represents a catalog of books using objects. 
// Each book in the catalog should have the following information:

// Title (a string).
// Author (a string).
// Published year (a number).
// ISBN (a string).

// Your task is to:
// Create an array of book objects, with each object representing a different book.
// Implement a function that takes an ISBN as input and returns the corresponding book's information (title, author,
// and published year).
// Add at least three books to your catalog.

// Define book objects
const book1 = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
    isbn: "978-0-316-76948-0"
};

const book2 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    isbn: "978-0-06-112008-4"
};

const book3 = {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    isbn: "978-0-452-28423-4"
};

// Create an array to store the books
const bookCatalog = [book1, book2, book3];

// Function to find a book by ISBN
function findBookByISBN(isbn) {
    for (const book of bookCatalog) {
        if (book.isbn === isbn) {
            return {
                title: book.title,
                author: book.author,
                publishedYear: book.publishedYear
            };
        }
    }
    return "Book not found in catalog";
}

// Test the function
const searchISBN = "978-0-316-76948-0"; // Replace with an ISBN from your catalog
const foundBook = findBookByISBN(searchISBN);

if (typeof foundBook === "object") {
    console.log("Book Found:");
    console.log("Title:", foundBook.title);
    console.log("Author:", foundBook.author);
    console.log("Published Year:", foundBook.publishedYear);
} else {
    console.log(foundBook);
}


// 5. Letter Frequency Counter
// Create a function called countLetters that takes a string as an argument and returns an object 
// where each key is a unique letter in the string, and the corresponding value is the number of 
// times that letter appears in the string. Ignore spaces and consider uppercase and lowercase 
// letters as the same character (case-insensitive).

function countLetters(str) {
    const letterCount = {};

    // Convert the string to lowercase
    const lowercaseStr = str.toLowerCase();

    for (const char of lowercaseStr) {
        if (char !== ' ') { // Check if the character is not a space
            if (letterCount[char]) {
                letterCount[char]++;
            } else {
                letterCount[char] = 1;
            }
        }
    }

    return letterCount;
}

// Test the function
const inputString = "Hello World";
const result = countLetters(inputString);
console.log(result);

