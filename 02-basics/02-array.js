

const marvel_heros = ["spiderman","ironman","thor"]
const dc_heros = ["superman" , "batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

// Spread operator:
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

// other array type example:
const another_array = [1,2,3,4,[5,6,7],8,9,[2,4,5,[4,6,7,8]]]
// for making it one simple array we can use flat and we have to give depth we can write infinity
console.log(another_array.flat(Infinity)) 

// when we get data from  any source it will be in different type so we can check using Array
console.log(Array.isArray("shahzad"))
// --> it gives false soo how we can convert it into array by using from:
console.log(Array.from("shahzad"))
console.log(Array.from({name:"shahzad"})) // if it does not coverts then it returns empty array

// suppose we have some values and we have to convert it into array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))

