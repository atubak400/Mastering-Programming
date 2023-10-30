// 1. Print Numbers in a Range
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

// 2. String length
const myName = "King Atuba";
let nameLength = 0;
for (let i = 1; i <= myName.length; i++) {
    nameLength++;
}
// console.log(`The length of my name, ${myName} is ${nameLength} characters.`);

// 3. String length without spaces
let nameLength2 = 0;
for (let i = 1; i <= myName.length; i++) {
        if (myName[i] !== " ") {
            nameLength2++;
        }
}

// console.log(`The length of my name, ${myName} without spaces is ${nameLength2} characters.`);


// 4. Sum of Array Elements
const numberss = [3, 7, 1, 9, 4];
let sum = 0;
for (let i = 0; i < numberss.length; i++) {
    sum += numberss[i];
}
console.log(`Sum of array elements: ${sum}`);



// 5. Print Even Numbers
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// 6. Count Characters occurence in a String
const text = "hello world";
const charToCount = 'l';
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] === charToCount) {
        count++;
    }
}
console.log(count);