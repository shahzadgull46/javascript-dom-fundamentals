// let block scope

let username = "Shahzad";

if (true) {
  // let age = 20;

  // Change let to var
  var age = 30;

  // console.log(username);
  // console.log(age);
}

// console.log(username);

// for let
// console.log(age);  // -> running this line throws error becasue age is only accessible in block

// for var -> this time this will work because var is function scope and can be accessed  anywhere
// console.log(age)

// let's practice the real difference
function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }

  console.log(a);
  // console.log(b); // -> throws error
}

// test();

let x = 100;

function test() {
  let x = 200;

  if (true) {
    let x = 300;
    console.log(x);
  }

  console.log(x);
}

test();

console.log(x);
