// 1. Example:
// const orderFood = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     let kitchenHasFood = false;

//     if (kitchenHasFood) {
//       resolve("Here's your food!");
//     } else {
//       reject("Sorry, we ran out.");
//     }
//   }, 2000);
// });
// orderFood.then((message)=>{
//     console.log(message)
// }).catch((error)=>{
// console.error(error)
// })

// 2.example:
// const checkUser = new Promise((resolve, reject) => {
//   const userExists = true;

//   if (userExists) {
//     resolve("User found!");
//   } else {
//     reject("User not found!");
//   }
// });
// checkUser.then((message
// )=>{
// console.log(message)
// })
// .catch((error)=>{console.error(error)})
// .finally(()=>{console.log("finsihed")})

// Now make it actually asynchronous

// const checkUser = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         const userExists = true;

//         if (userExists) {
//             resolve("User found!");
//         } else {
//             reject("User not found!");
//         }

//     }, 2000);

// });

// console.log("Checking user...");

// checkUser
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Promise chaining
// const getUser = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({ name: "Shahzad", id: 101 });
//   }, 1000);
// });
// getUser
//   .then((user) => {
//     console.log(user);

//     return user.id;
//   })
//   .then((id) => {
//     console.log("User ID:", id);

//     return `Posts of user ${id}`;
//   })
//   .then((posts) => {
//     console.log(posts);
//   });


// Same example with async/await

// const getUser = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve({ name: "Shahzad", id: 101 });
//     }, 1000);
// });

// async function getUserPosts() {

//     const user = await getUser;
//     console.log(user);

//     const id = user.id;
//     console.log("User ID:", id);

//     const posts = `Posts of user ${id}`;
//     console.log(posts);
// }

// getUserPosts();

// last example
async function getUser() {

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log("Error:", error);
    }
}

getUser();