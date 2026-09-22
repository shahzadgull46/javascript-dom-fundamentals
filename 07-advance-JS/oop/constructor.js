function Person(name, age) {
  this.name = name;
  this.age = age;
  // Add method sayHello that prints name and age
  this.sayHello = function () {
    console.log(`Hello ${this.name + "," + this.age}`);
  };
}

// Create two people
let person1 = new Person("Ali", 25 + " years old");
let person2 = new Person("Sara", 30 + " years old");
let person3 = new Person("Shahzad", 18 + " years old");

// Test
// person1.sayHello(); // "Hello, I'm Ali, 25 years old"
// person2.sayHello(); // "Hello, I'm Sara, 30 years old"
// person3.sayHello();

// Next: Car Constructor
function Car(brand, model, color, year) {
  ((this.brand = brand),
    (this.model = model),
    (this.color = color),
    (this.year = year),
    (this.start = function () {
      console.log(`${this.model} is going to start`);
    }),
    (this.getAge = function () {
      let age = 2024 - this.year;
      console.log(`This car is ${age} years old`);
    }));
}
let car1 = new Car("toyota", "Corolla", "Black", 2024);
console.log(car1.color);
console.log(car1.brand);
console.log(car1.model);
console.log(car1.year);

// car1.start()
// car1.getAge()

// Next: Bank Account Constructor (Final Exercise!)
function BankAccount(owner){
this.owner=owner;
this.balance=0;
this.deposit=function(n){
     this.balance=this.balance+n
    console.log(`Your new balance after depositing is: ${this.balance}`)
};
this.withdraw=function(n){
       this.balance=this.balance-n
    console.log(`Your new balance after withdrawing is: ${this.balance}`)

};
this.getBalance=function(){
      console.log(`Your current balance is: ${this.balance}`)
}

}
let account = new BankAccount("Shahzad");
account.deposit(1000);    // "Deposited 1000. New balance: 1000"
account.withdraw(300);    // "Withdrew 300. New balance: 700"
account.getBalance();     