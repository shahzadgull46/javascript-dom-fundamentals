// // == vs ===
// console.log(2 == "2");
// console.log(2 === "2");
// console.log(2 != "2");
// console.log(2 !== "2");

// truthy/falsy + if/else
// const username = "";
// changeed to
// const username = "shahzad"

// if (username) {
//   console.log("Username exists");
// } else {
//   console.log("Username is empty");
// }

// falsy and truthy values:

/*
Falsy Values (evaluated as false)
Truthy Values (evaluated as true)
false
0 and -0
0n (BigInt zero)
"" (empty string)
null
undefined
NAN

Truthy values -> as true:
"0" (string zero)
'false' (string false)
" " (string containing a space)
{} (empty object)
[] (empty array)
function() {} (empty function)

*/

// console.log(Boolean(0));
// console.log(Boolean("0"));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean([]));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

//  Swithch statement:
// const day = "tue"

// switch (day) {
//     case "mon":
//         console.log("Monday")
//         break;

//    case "tue":
//         console.log("Tuesday");
//         break;

//     case "wed":
//         console.log("Wednesday");
//         break;

//     default:
//         console.log("Invalid day");
// }

//  (nullish coalescing ??)
// --> Use the value on the left unless it is null or undefined.

/*
null       → fallback
undefined  → fallback

0          → keep 0
""         → keep ""
false      → keep false
[]         → keep []
{}         → keep {}
*/

console.log(null ?? "Guest");
console.log(undefined ?? "Guest");
console.log("Shahzad" ?? "Guest");
console.log(0 ?? 100);
console.log("" ?? "Guest");


// Ternary operator:
const age = 20;

age >= 18 ? console.log("Adult") : console.log("Minor");

const price = 100;
price>=100 ? console.log("Expensive") : console.log("Cheap")
