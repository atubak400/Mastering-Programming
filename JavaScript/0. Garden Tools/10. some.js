// 1.
const numberss = [1, 2, 3, 4, 5];
function isEven(number) {
  return number % 2 === 0;
}
const hasEvenNumber = numberss.some(isEven);
console.log(hasEvenNumber); // Output: true (because 2 and 4 are even)

//or

const numbersss = [1, 2, 3, 4, 5];
const isEven2 = (number) => number % 2 === 0;
const hasEvenNumberr = numbersss.some(isEven);
console.log(hasEvenNumberr);

//or

const numberssss = [1, 2, 3, 4, 5];
const hasEvenNumberrr = numberssss.some((number) => number % 2 === 0);
console.log(hasEvenNumberrr);

//or

const numberrs = [1, 2, 3, 4, 5];

const hasEvenNumbeer = numberrs.some(number => number % 2 === 0);

if (hasEvenNumbeer) {
  console.log('At least one even number found.');
} else {
  console.log('No even numbers found.');
}

//or 

const numbeeers = [1, 2, 3, 4, 5];
const hasEvenNumbeeer = numbeeers.some(number => number % 2 === 0);
const resultMessage = hasEvenNumbeeer ? `At least one even number found in ${numbeeers}.` : 'No even numbers found.';
console.log(resultMessage);


// 2.
const numbers = [1, 2, 3, 4, 5];
// Check if at least one element is greater than 3 using an arrow function
const result = numbers.some(element => element > 3);
console.log(result); // Output: true


// 3.
const words = ["apple", "banana", "cherry", "date"];
// Check if there's a word with a length greater than 6
const result2 = words.some(word => word.length > 6);
console.log(result2); // Output: true (because "banana" has a length greater than 6)




