// Simple Example
// Creating an object using object literal syntax
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
};

// Accessing object properties
console.log(person.firstName); // Output: "John"
console.log(person.age); // Output: 30

// Modifying object properties
person.age = 31;

// Adding a new property
person.country = "USA";

// Calling a method
person.sayHello(); // Output: "Hello, my name is John Doe."

// Object.keys() - Retrieves an array of object keys.
const keys = Object.keys(person);
console.log(keys); // Output: ["firstName", "lastName", "age", "isStudent", "sayHello"]

// Object.values() - Retrieves an array of object values.
const values = Object.values(person);
console.log(values); // Output: ["John", "Doe", 31, false, [Function: sayHello]]

// Object.entries() - Retrieves an array of key-value pairs as arrays.
const entries = Object.entries(person);
console.log(entries);
// Output:
// [["firstName", "John"], ["lastName", "Doe"], ["age", 31], ["isStudent", false], ["sayHello", [Function: sayHello]]]

// Object.hasOwnProperty() - Checks if an object has a specific property
const hasAgeProperty = person.hasOwnProperty("age");
console.log(hasAgeProperty); // Output: true

// or 

const hasAgeProperty2 = { key1: 'value1', key2: 'value2', key3: 'value3' };

if ('key2' in hasAgeProperty2) {
  console.log('The object "hasAgeProperty2" has key2');
} else {
  console.log('The object "hasAgeProperty2" does not have key2');
}

// Object.assign() - Copies the values of properties from one or more source objects to a target object
const additionalInfo = { hobbies: ["Reading", "Traveling"] };
Object.assign(person, additionalInfo);
console.log(person);
// Output:
// {
//   firstName: "John",
//   lastName: "Doe",
//   age: 31,
//   isStudent: false,
//   sayHello: [Function: sayHello],
//   country: "USA",
//   hobbies: ["Reading", "Traveling"]
// }


// Object.freeze() - Prevents any modification to an object (immutable)
Object.freeze(person);
person.age = 32; // This assignment will have no effect (no error, but no change).
console.log(person.age); // Output: 31


// delete Operator: The delete operator is used to remove a property from an object. 
// After deletion, the property will no longer exist in the object.

const person2 = {
    firstName: "John",
    lastName: "Doe"
};

// Deleting a property
delete person2.lastName;

console.log(person2); // Output: { firstName: "John" }


// in Operator: The in operator is used to check if a specific property exists within an object. 
// It returns true if the property is found, otherwise false.

const person3 = {
    firstName: "John",
    lastName: "Doe"
};

// Checking if a property exists
const hasLastName = "lastName" in person3;
const hasAge = "age" in person3;

console.log(hasLastName); // Output: true
console.log(hasAge); // Output: false
