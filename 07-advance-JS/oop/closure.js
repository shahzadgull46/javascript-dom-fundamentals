function outer() {
  const message = "Hello!";
  function inner() {
    console.log(message);
  }
  return inner; // returning the function itself, not calling it
}

const myFunc = outer(); // outer() has already finished running
myFunc(); // "Hello!" — still works, because 'message' was preserved specifically for inner


 // tasks
// Task 2 — Greeting Factory
function greeting(message){
return function(name){
    console.log(`${message} ${name}`)
}
}
let sayHello=greeting("Hello")
// sayHello("Shahzad")
// sayHello("Hammad")

function createGreerting(msg){
 return function(name){
    console.log(`${msg} ${name}`)
}
}
let saySalam=createGreerting("Assalam o Alaikum")
// saySalam("Shahzad")

let sayBy=createGreerting("Allah Hafiz")
// sayBy("Shahzad")

          // Task 3 — Private Bank Balance
function bankAccount(balance){
    function deposit(amount){
       balance=balance+amount;
       console.log("New balance after depositing:",balance);
   }
   function withdraw(amount){
     balance = balance-amount;
     console.log("balance after withdrawing amount:",balance);
   }
   function checkBalance(amount){
  console.log("Current balance:",balance);
   }
   return{
    deposit,withdraw,checkBalance
   }
}
let acc=bankAccount(1000)
acc.deposit(500)
acc.withdraw(200)
acc.checkBalance()

//  Password Manager (Real-world)
function createPassword(initialPass){
let password = initialPass
function changePass(newPass){
       password=newPass
       console.log("Password changed successfully")
}
function checkPass(pass) {
if (pass===password) {
     console.log("Correct password ✅");
    } else {
      console.log("Wrong password ❌");
}       
}
function getPass(){
    console.log("Can not get password directly")
}
return{
    changePass,checkPass,getPass
}
}
// let password=createPassword("water")
// password.changePass("Shahzada")

let acc2 = createPassword("water");

acc2.checkPass("water");     // correct
acc2.changePass("Shahzada"); // changed
acc2.checkPass("water");     // wrong
acc2.checkPass("Shahzada");  // correct