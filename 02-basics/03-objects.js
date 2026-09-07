const mysym = Symbol("userId");

const user = {
  name: "shahzad",
  age: 20,
  "full name": "Shahzad Gull",
  fav_bike: 125,

  greeting: function () {
    console.log(`Hello ${this.name}`);
  },
  [mysym]: "USER123",
};
user.age = 18;
user.email = "shahzadgull@gamil.com";
user.city = "shorkot";
Object.freeze(user); // no longer access to change our object
user.age = 20;

console.log(user.name);
console.log(user.age);
console.log(user.fav_bike);
console.log(user["full name"]);
console.log(user["email"]);
console.log(user.city);
console.log(user.mysym); // undefined
console.log(typeof mysym); // symbol
console.log(user[mysym]); //USER123
console.log(Object.keys(user));
console.log(Object.getOwnPropertySymbols(user));
console.log(Object.getOwnPropertySymbols(user)[0]);
console.log(Object.getOwnPropertySymbols(user)[0] === mysym);
user.greeting();
