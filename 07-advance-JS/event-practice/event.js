//  Task 1: Chage bg color on click
const button = document.querySelector("#colorBtn");
button.addEventListener("click", () => {
  // document.getElementById("box").style.backgroundColor="blue"

  // for generating the random color
  document.getElementById("box").style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

//    Task 2 : Show alert when button was clicked
const buttun = document.querySelector("#colorBtn");
buttun.addEventListener("click", () => {
  alert("Hello hammad");
});

// Task 3 (Doubling the number)
const doublenum = document.querySelector("#incBtn");
doublenum.addEventListener("click", () => {
  let number = document.getElementById("counter").innerText;
  number = Number(number);
  number = number * 2;
  document.getElementById("counter").innerHTML = number;
});

// Task 4 — Show / Hide Password

// let passkey = document.querySelector("#toggleBtn");

// passkey.addEventListener("click", () => {

//   if (document.getElementById("toggleBtn").innerHTML === "Show") {
//     document.getElementById("toggleBtn").innerHTML = "Hide";

//     if (document.getElementById("password").type === "password") {
//       document.getElementById("password").type = "text";
//     }
//   } else if (document.getElementById("toggleBtn").innerHTML === "Hide") {
//     document.getElementById("toggleBtn").innerHTML = "Show";

//     if (document.getElementById("password").type === "text") {
//       document.getElementById("password").type = "password";
//     }
//   }
// });


let passkey = document.querySelector("#password");
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {

  if (passkey.type === "password") {
      passkey.type = "text";
      btn.innerText = "Hide";
      
  }
  else
   {
    passkey.type="password";
    btn.innerText="Show";
   }

});

    