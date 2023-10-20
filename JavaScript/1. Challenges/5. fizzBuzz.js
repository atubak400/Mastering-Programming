// Challenge: Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the number. 
// For multiples of 5, print "Buzz" instead. For numbers that are multiples of both 3 and 5, print "FizzBuzz".


function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(15); // Output: Follows the FizzBuzz pattern for numbers 1 to 15

function fizzBuzz2(n) {
    const results = [];
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        results.push(output || i);
    }
    console.log(results.join('\n'));
}

fizzBuzz2(15); 

