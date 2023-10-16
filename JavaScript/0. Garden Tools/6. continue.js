// 1. skip even numbers in an array
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue; // Skip even numbers and continue with the next iteration.
    }
    console.log(numbers[i]);
}


// 2. Print Numbers Not Divisible by 3
let i = 1;

while (i <= 10) {
    if (i % 3 === 0) {
        i++; // Increment i to avoid an infinite loop when a multiple of 3 is encountered.
        continue; // Skip numbers divisible by 3.
    }
    console.log(i);
    i++;
}
