
// TODO 1: Write a constructor function called Product
// It should accept 'name' and 'price' as parameters
// and set them as this.name and this.price
function Product(name,price) {
this.name = name
this.price = price
this.logfunction = ()=>{
console.log(`The cost of ${this.name} is ${this.price}`)
}
}

// TODO 2: Create 3 different products using 'new'
// e.g. a laptop, a phone, a book — your choice
const product1 = new Product("laptop","350$")
const procut2 = new Product("iphone 14","500$")
const product3 = new Product("125","1000$")


// TODO 3: Add a method INSIDE the constructor function called 'describe'
// It should log something like: "Laptop costs $999"



// Now call .describe() on each of your 3 products
product1.logfunction()
procut2.logfunction()
product3.logfunction()


// TODO 4 (bug-finding practice): 

// What do you think will print? Try it and see if your prediction was right.
const product4 = Product("gloves","5$")
console.log(product4)

// TODO 5 (prototype check, ):

console.log(product1.constructor === Product);
console.log(product1.hasOwnProperty('constructor'));