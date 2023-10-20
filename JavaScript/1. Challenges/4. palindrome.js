// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

const testString = "A man, a plan, a canal, Panama";
console.log(isPalindrome(testString)); 


function isPalindrome2(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str.charAt(i) !== str.charAt(j)) {
            return false;
        }
    }
    return true;
}

const testString2 = "A man, a plan, a canal, Panama";
console.log(isPalindrome2(testString2));

