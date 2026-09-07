

 function sayHello (){
console.log("hello ")
}
sayHello()

 // Parameters
function greet(name){
    console.log(`Hello ${name}`)
}
greet("shahzad")

// Return
function sum(num1,num2){
return num1+num2
}
const result =sum(4,5)
console.log(result)

// Real use of return 
function calculatePrice(price,tax){
    const total = price + tax
    return total
}
const finalPrice = calculatePrice(100,50)
console.log(`Final price is: ${finalPrice}`)


// Default parameter:
function welcome(name = "Guest"){
console.log(`Welcome ${name}`)
}
welcome()

// Fun with condition:
function checkAge(age){
if (age>=18) {
    console.log("You can vote")
} else {
    console.log("you can not vote")
}
}
checkAge(45)

// Chellenge
function calculateDiscount(price, discount) {
          discountAmount = discount/100*price
        let finalPrice = price - discountAmount
        console.log(finalPrice)
 }
 calculateDiscount(500,20)