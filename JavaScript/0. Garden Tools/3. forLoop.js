// Print Numbers in a Range
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// String length
const myName = "Kingsley Tutorful";
let nameLength = 0;
for (let i = 0; i < myName.length; i++) {
    nameLength++;
}
console.log(`The length of my name, ${myName} is ${nameLength} characters.`);

// String length without spaces
let nameLength2 = 0;
for (let i = 0; i < myName.length; i++) {
    if (myName[i] !== ' ') {
        nameLength2++;
    }
}
console.log(`The length of my name, ${myName} without spaces is ${nameLength2} characters.`);

//Sum of Array Elements
const numberss = [3, 7, 1, 9, 4];
let sum = 0;
for (let i = 0; i < numberss.length; i++) {
    sum += numberss[i];
}
console.log(`Sum of array elements: ${sum}`);



//Print Even Numbers
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// Count Characters occurence in a String
const text = "hello world";
const charToCount = 'l';
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] === charToCount) {
        count++;
    }
}
console.log(count);

// Reverse a string
const inputString = "Hello, World!";
let reversedString = "";
for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
}
console.log(reversedString);

// Reverse an Array
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = [];
for (let i = originalArray.length - 1; i >= 0; i--) {
    reversedArray.push(originalArray[i]);
}
console.log(`Reversed Array: ${reversedArray}`);


//Find the Largest Number
const numbers = [10, 5, 20, 15, 8];
console.log(numbers[1]);
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(`The largest number is: ${largest}`);

// Find the Smallest Number in an Array
const numbers6 = [8, 4, 10, 3, 7];
let smallest = numbers6[0];
for (let i = 1; i < numbers6.length; i++) {
    if (numbers6[i] < smallest) {
        smallest = numbers6[i];
    }
}
console.log(`Smallest number: ${smallest}`);



//Count Vowels in a String
const inputString2 = "JavaScript is awesome!";
let vowelCount = 0;
const vowels = "aeiouAEIOU";
for (let i = 0; i < inputString2.length; i++) {
    if (vowels.includes(inputString2[i])) {
        vowelCount++;
    }
}
console.log(vowelCount);


// Multiplication Table
const num = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


// Check for Prime Number
const num2 = 18;
let isPrime = true;
for (let i = 2; i < num2; i++) {
    if (num2 % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(`${num2} is${isPrime ? ' ' : ' not '}a prime number.`);


// Factorize a Number
const num3 = 24;
console.log(`Factors of ${num3}:`);
for (let i = 1; i <= num3; i++) {
    if (num3 % i === 0) {
        console.log(i);
    }
}

// Find the Average of an Array
const numbers4 = [10, 5, 20, 15, 8];
let sum4 = 0;
for (let i = 0; i < numbers4.length; i++) {
    sum4 += numbers4[i];
}
const average = sum4 / numbers4.length;
console.log(`Average: ${average}`);


// Count Even Numbers
const numbers5 = [3, 7, 2, 9, 4, 6];
let evenCount = 0;
for (let i = 0; i < numbers5.length; i++) {
    if (numbers5[i] % 2 === 0) {
        evenCount++;
    }
}
console.log(`Number of even numbers: ${evenCount}`);


// Generate a Range of Numbers
const start = 5;
const end = 10;
const generatedArray = [];
for (let i = start; i <= end; i++) {
    generatedArray.push(i);
}
console.log(`Generated Array: ${generatedArray}`);


// Calculate the Factorial of a Number
const n = 6;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`Factorial of ${n}: ${factorial}`);


