

/*
for ->  index you use array[i]
for...of -> value
for...in -> keys
for.Each() -> value + indexes + array
*/



// forOf
// const fruits = ["apple", "banana", "mango"];
// for (const fruit of fruits) {
//     console.log(fruit)
// }

// const numbers3 = [10, 20, 30, 40];

// for (const number of numbers3) {
//     console.log(number);
// }

// for...of with a string

// const name = "Shahzad";
// for (const char of name) {
//     console.log(`The char is ${char}`)
// }


// for...in — keys
const user = {
    name: "Shahzad",
    age: 20,
    city: "Shorkot"
};
// get the key
// for (const key in user) {
//     console.log(key)
    
// }
// to get the value:
// for (const key in user) {
//     console.log(user[key])
    
// }


// For each:
const numbers = [10,20,30,40]

// numbers.forEach((number,index)=>{
//     console.log(index,number*2)
// })


const products = [
    { name: "Burger", price: 200 },
    { name: "Shawarma", price: 150 },
    { name: "Fries", price: 100 }
];

// products.forEach((products,index)=>{
//     console.log(`${index} ${products.name} price is ${products.price}`)
// })

// map() vs forEach()
// forEach --> it performs an action for each item
// map()   --> creates a new array for each item


// const numbers2 = [1, 2, 3];

// numbers2.forEach((number) => {
//     console.log(number * 2);
// });

const numbers2 = [1,2,3]
const doubled = numbers2.map((number)=>{
    return number*2
})
// console.log(doubled)

// passing a function: (only give reference)
const coding = ["js","python","react","HTML","CSS"]
function printME(item){
console.log(item)
}
coding.forEach(printME)

// Array with multiple objects:

const myCoding = [
    {
        languageName: "python",
        languageFileName:"py"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "javaScript",
        languageFileName:"js"
    },

]
myCoding.forEach( (item)=>{
console.log(item.languageName)
})

