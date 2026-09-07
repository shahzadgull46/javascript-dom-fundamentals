


// rest parameter must come last
function addNumbers(first , second , ...numbers){
    console.log(first)
    console.log(second)
      console.log(numbers)
}
addNumbers(1,2,3,4,5)

// Passing an Object to a Function
const user = {
    name:"shahzad",
    price:"999"
}
const user1 = {
    name:"Hammad",
    price:"99"
}


function handleObject(anyObject){
    console.log(anyObject.name)
    console.log(anyObject.price)
}
handleObject(user1)

// pass the object directly
function handleObject(newObject){
    
console.log(newObject.name)
console.log(newObject.price)
}
handleObject({

    name:"Ali",
    price:"999"
})

// Array as an argument
const newArray = [100,200,300,400]
function returnSecondValue(getArray){
      return getArray[1]
}
// console.log(returnSecondValue(newArray))

// Directly passing
console.log(returnSecondValue([100,200,300]))
