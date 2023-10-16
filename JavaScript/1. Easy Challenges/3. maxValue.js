// Write a function that finds the maximum value in an array of number

function findMaxValue(arr) {
    return Math.max(...arr);
}

const numbers = [3, 7, 2, 8, 5];
console.log(findMaxValue(numbers)); // Output: 8

function findMaxValue2(arr) {
    let max = arr[0]; // Assume the first element is the maximum
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const numbers2 = [3, 7, 2, 8, 5];
console.log(findMaxValue2(numbers2)); // Output: 8
