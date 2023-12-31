// Use in Strings
const str = 'Hello, World!';
const substring = 'world';

const isSubstringInString = str.toLowerCase().includes(substring.toLowerCase()); // true


// Use in Arrays
const intArray = [1, 2, 3, 4, 5];
const value = 3;

const isInArray = intArray.includes(value);

if (isInArray) {
  console.log(`${value} is included in the array.`);
} else {
  console.log(`${value} is not included in the array.`);
}



// Use in Objects
const array = [{ name: 'Alice' }, { name: 'Bob' }];
const obj = { name: 'Alice' };

const isInArray2 = array.includes(obj); // This will return false because it's a reference comparison.

const comparison = array.some(item => item.name === obj.name); // This will return true.

//or

if (comparison) {
  console.log(`${JSON.stringify(obj)} is included in ${JSON.stringify(array)}.`);
  console.log(obj, 'is included in', array);
} else {
  console.log(`${JSON.stringify(obj)} is not included in ${JSON.stringify(array)}.`);
  console.log(obj, 'is not included in', array);
}


// Use in functions
function findWord(words, target) {
    return words.includes(target);
  }
  
  const wordList = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  console.log(findWord(wordList, 'date'));
  console.log(findWord(wordList, 'grape'));
  

// Check Password for forbidden words
function isPasswordValid(password) {
    const forbiddenWords = ['password', '123456', 'secret'];
    
    // Convert the password to lowercase to perform a case-insensitive check.
    const lowercasePassword = password.toLowerCase();
  
    // Check if the password contains any forbidden words using a for loop.
    for (let i = 0; i < forbiddenWords.length; i++) {
      if (lowercasePassword.includes(forbiddenWords[i])) {
        return false;
      }
    }
  
    return true;
  }
  
console.log(isPasswordValid('mySecretPassword')); // false
console.log(isPasswordValid('user12345'));        // true
