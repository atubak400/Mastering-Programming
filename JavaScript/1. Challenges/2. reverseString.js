// Challenge: Write a function that takes a string and returns the reverse of that string

function reverseString(str) {
    return str.split('').reverse().join('');
}
const inputString = "Hello, World!";
console.log(reverseString(inputString)); 



function reverseString2(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const inputString2 = "Hello, World!";
console.log(reverseString2(inputString2));