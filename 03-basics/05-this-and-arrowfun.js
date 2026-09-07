const user = {
  name: "shahzad",
  age: 18,

  introduce: function () {
    console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
  },
};
user.introduce();

// Arrow function
const add = (a, b) => {
  return a + b;
};
console.log(add(4, 3));

// Implicit return
const add2 = (a, b) => a + b;

console.log(add(4, 3));

// practical challenge — return an object
const getUser = () => ({
  name: "Shahzad",
  age: 20,
});

console.log(getUser());

// Final mini-challenge
const user2 = {
  name: "Shahzad",
  greet: function () {
    // sayHello = ()=>(console.log(`Hello ${this.name}`))
    sayHello = () => `Hello ${this.name}`;

    return sayHello();
  },
};

console.log(user2.greet());


// -----------------------------------------------

// this inside object method
// → refers to calling object

// (a, b) => a + b
// → implicit return

// (a, b) => {
//     return a + b;
// }
// → explicit return

// () => ({ name: "Shahzad" })
// → implicit object return
