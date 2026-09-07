/*
         Number and Math
        1. Number:
        --> javascript has only one number type , unlike other languages Js does not have separate values like int and float
        ==> Number Methods:
         -> toString() -> converts a number into a string
         -> toFixed() -> controls decimal places
         -> toPricison -> controls the total number of significant digits
        2. Math:
        -> The Math object provides useful mathematical functions.
        -> Math.round() -> round the nearest integer
        -> Math.floor() -> always round down
        -> Math.ceil() -> always round up 
        -> Math.trunc() -> removes the decimal part
        -> Math.abs() -> returns the positive value
        -> Math.max() -> find the largest number
        -> Math.min() -> find the smaller number
        -> Math.sqrt() -> square root
        -> Math.pow() -> power {Modern JavaScript usually uses: console.log(2 ** 3);}
         -> Math.random() -> returns a random number between 0 -> 1
        
        
        */

        //  Examples of Number
let a = 10;
let b = 10.5;

// console.log(typeof a);
// console.log(typeof b);


// let num = 100;

// console.log(num.toString());
// console.log(typeof num.toString());


let price = 99.5678;

// console.log(price.toFixed(2));

// let num = 123.456;

// console.log(num.toPrecision(2));


                 // Math example:
                 let num = 25.678;

console.log(num);
console.log(typeof num);

console.log(num.toFixed(2));
console.log(num.toPrecision(4));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.trunc(num));

console.log(Math.abs(-50));

console.log(Math.max(10, 50, 20));
console.log(Math.min(10, 50, 20));

console.log(Math.sqrt(81));

console.log(Math.pow(5, 2));

console.log(Math.random());

console.log(Math.floor(Math.random() * 100) + 1);