//  Tasks
//    Ex 1 Create Calculator class with static methods:
class Calculator {
  static add(x, y) {
    return x + y;
  }
  static multiply(x, y) {
    return x * y;
  }
  static divide(x, y) {
    return x / y;
  }
  static modulus(x, y) {
    return x % y;
  }
}
// console.log("Addition"+Calculator.add(210,90))
// console.log("Multiplying "+Calculator.multiply(43,25))
// console.log("deviding"+Calculator.divide(34,12))
// console.log("modulus is: "+Calculator.modulus(34,10))

//    Ex 2
class User {
  static userCount = 0;
  constructor() {
    User.userCount++;
  }
  static getUserCount() {
    return User.userCount;
  }
}
let u1 = new User();
let u2 = new User();
let u3 = new User();

// console.log("Total users: ",User.getUserCount());  // 3

//   Ex 3
class Bank {
  static totalAccounts = 0;
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
    Bank.totalAccounts++;
  }
  deposit(amount) {
    this.balance = this.balance + amount;
  }
  static getTotalAccounts() {
    return Bank.totalAccounts;
  }
}
let acc1 = new Bank("Shahzad");
let acc2 = new Bank("Sara");
let acc3 = new Bank("John");
// console.log(Bank.getTotalAccounts());  // 3
// console.log(acc1.balance);             // 0
// acc1.deposit(1000);
// console.log(acc1.balance);

//    Ex 4
class MathUtility {
  static square(n) {
    return n * n;
  }
  static cube(n) {
    return n * n * n;
  }
  static isEven(n) {
    if (n % 2 === 0) {
      return true;
    } else return false;
  }
  static max(a, b, c) {
    if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else return c;
  }
}
console.log(MathUtility.square(5)); // 25
console.log(MathUtility.cube(3)); // 27
console.log(MathUtility.isEven(4)); // true
console.log(MathUtility.isEven(7)); // false
console.log(MathUtility.max(10, 25, 15)); // 25
