let car = {
  brand: "toyota",
  model: "Corolla",
  year: 2020,
  brandName: function () {
    console.log(`The brand name is: ${this.brand}`);
  },
  brandModel: function () {
    console.log(`The model is: ${this.model}`);
  },
};
// car.brandName()
// car.brandModel()

// Next Exercise: Bank Account
let account = {
  name: "shahzad gull",
  balance: 1000,
  deposit: function (n) {
    this.balance = this.balance + n;
    console.log(`Your balance after depositing: ${this.balance}`);
  },
  withdraw: function (n) {
    this.balance = this.balance - n;
    console.log(`Your remaining balance is: ${this.balance}`);
  },
};
// account.deposit(1000);
// account.withdraw(300);

// Next Exercise: Method Calling Another Method
let user={
    firstName:"Shahzad",
    lastName:"Gull",
    getfullName: function(){
     let fullname=this.firstName +" "+ this.lastName
     return (`${fullname}`)
    },
    greet:function(){
        console.log(`Hello! ${this.getfullName()}`)
    } 
}
console.log("Full username is: ",user.getfullName())
user.greet()


