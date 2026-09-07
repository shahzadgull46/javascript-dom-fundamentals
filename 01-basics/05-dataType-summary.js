/*
 Primitive & Non primitive
 --> primitive stores its own one valueo or stores a single value
 --> copied by value
 --> indepedent copies
--> Example:
      -> string, numbere, boolean, bigInt, symbol, undefined , null



 --> non primitive stores multiple/complex values 
--> copied by reference
--> shared referenced
--> Example:
    -> array, object, function


*/

// Primitive:
// 1. string
let name = "Hammad";

console.log(typeof name);

// 2. number
let age = 20;

console.log(typeof age);
// 3. boolean
let isStudent = true;

console.log(typeof isStudent);

// 4. undefined
let city;

console.log(city);

// 5. null
let phone = null;

console.log(phone);
// bigInt
let money = 123456789012345678901234567890n;

console.log(typeof money);
// symbol
let id = Symbol("id");

console.log(typeof id);

// Non- Primitive:
// object
let student = {
  name: "Hammad",
  age: 20,
  marks: 900,
};

// Array
let fruits = ["Apple", "Banana", "Mango"];

// Function
function greet() {
  console.log("Hello");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack and Heap
/*
                       
                       
                       Stack (Primitive)

• Stores primitive values.
• Variables contain the actual value.
• Assignment creates a copy of the value.
• Changes do not affect other variables.

Heap (Non-Primitive)

• Objects, arrays, and functions are stored in the heap.
• Variables store a reference (memory address).
• Assignment copies the reference.
• Multiple variables can point to the same object.
• Changing the object through one variable affects all references.*/

// stack example:
let a = 100;
let b = a;
b = 500;
console.log(a);
console.log(b);

// heap example:
let user1 = {
  name: "Ali",
};

let user2 = user1;

user2.name = "Ahmed";

console.log(user1.name);
console.log(user2.name);


// let user1 = {
//     name: "Ali"
// };

// let user2 = user1;

// user2 = {
//     name: "Ahmed"
// };

// console.log(user1.name);
// console.log(user2.name);