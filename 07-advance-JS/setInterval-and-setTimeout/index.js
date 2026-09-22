

// Set interval 
// let secondleft = 5;
// const countdown = setInterval(function(){
//     console.log(secondleft)
//     secondleft = secondleft-1
//   if (secondleft<0) {
//     clearInterval(countdown)
//     console.log("time is up")
//   }  
// })

// Set time out:
// console.log("start")

// setTimeout(function(){
//     console.log("This run after 3 seconds ")
// },3000)
// console.log("End")

console.log("A");

setTimeout(function() {
  console.log("B");
}, 1000);

setTimeout(function() {
  console.log("C");
}, 0);

console.log("D");