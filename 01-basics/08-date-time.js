

// this object contain the current date and time
// let today = new Date()
// console.log(today)

// When we create Date object it contain both date and time
let date = new Date()
console.log(date)
// We can get year , month or any specific thing by using get
// console.log(date.getFullYear())
// -> javascript start month from zero 
// console.log(date.getMonth())
// so many dev write like this:
// console.log(date.getMonth() + 1)

// create your own date:
// let birthday = new Date ("2008-01-01")
// console.log(birthday)

// full local date and time:

// console.log(date.toLocaleString())


let today = new Date();

console.log(today);

console.log("Year:", today.getFullYear());

console.log("Month:", today.getMonth() + 1);

console.log("Date:", today.getDate());

console.log("Day:", today.getDay());

console.log("Hours:", today.getHours());

console.log("Minutes:", today.getMinutes());

console.log("Seconds:", today.getSeconds());

console.log(today.toDateString());

console.log(today.toTimeString());

console.log(today.toLocaleDateString());

console.log(today.toLocaleTimeString());

console.log(today.toLocaleString());

console.log(Date.now());

// Greeting based on time:
let hours =  new Date().getHours()
if (hours<12) {
    console.log("Good morning")
} else if(hours<18){
    console.log("Good afternoon")
}
else{
    console.log("Good evening")
}
