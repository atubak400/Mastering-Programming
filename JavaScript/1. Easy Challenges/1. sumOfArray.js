// Challenge: Write a function that takes an array of numbers and returns the sum of all the elements.

function sumArrayElements2(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
const numbers2 = [11, 12, 13, 14, 15];
console.log(sumArrayElements(numbers2)); // Output: 65


function sumArrayElements(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayElements(numbers)); // Output: 15