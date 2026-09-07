
// map: --> Transform every item into new array

const products = [
    { name: "Burger", price: 200 },
    { name: "Shawarma", price: 150 },
    { name: "Fries", price: 100 }
];
// products.map( (item)=> console.log(item.name ))

// Filter: keep some items -> new array

// const numbers = [10, 20, 30, 40];
// const result = numbers.filter( (number)=> {
//     return number>10
// } )
// console.log(result)

// const list = products.filter( (item)=>{
//     return item.name === "Shawarma"
// })

const list = products.filter( (item)=>{
    return item.price>100
})

// console.log(list)

// Reduce: turns many values into one result

const prices = [200, 150, 100];

const total = prices.reduce((acc,price)=>{
return acc+ price
})
// console.log(total)

const totalPrice = products.reduce((acc,product)=>{
return acc + product.price
},0)
console.log(totalPrice)


// combining filter() + map()

const numbers = [10, 20, 30, 40, 50];
const result2 = numbers
.filter((number)=>number<=50)
.map((number)=>number + 10)
console.log(result2)


// combining filter() + map() + reduce()
const totalBill = products
.filter((product)=>product.price>=150)
.map((product)=>product.price)
.reduce((acc,price)=>  acc+ price ,0)
console.log(`The total price will be: ${totalBill}`)