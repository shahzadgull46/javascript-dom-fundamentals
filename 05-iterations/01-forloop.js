

// for (let i = 0; i <=10 ; i++) {
// console.log("Shahzad")    
// }

// Using array in loop:
// const fruits = ["apple", "banana", "mango", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// Nested loop:
// for (let i = 1; i <= 2; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log(i, j);
//     }
// }

// Break and continue in loop:
// -> Break completely stops the loop
// -> continue skip only this iteration and continues the loop

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}


for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}