// TODO 1: Write a constructor function called BankAccount

function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;
}
// TODO 2: Add a method to BankAccount.prototype called 'deposit'

BankAccount.prototype.deposit = function (amount) {
  this.balance = amount + this.balance;
  console.log(` new balance is ${this.balance}`);
};

// TODO 3: Add ANOTHER method to BankAccount.prototype called 'withdraw'

BankAccount.prototype.withdraw = function (amount) {
  this.balance = this.balance - amount;
  console.log(`New balance is : ${this.balance}`);
};
// TODO 4: Create 2 accounts using 'new'

const account1 = new BankAccount("shahzad", 400000);
const account2 = new BankAccount("Ali", 200000);

account1.deposit(500);
account2.withdraw(1000);

// TODO 5 (prediction, based on what you know about .prototype sharing):
console.log(account1.deposit === account2.deposit);
// Before running it — do you think this is true or false? Why?
// (Hint: think about "one shared copy" vs "separate copy per instance")

// TODO 6 (custom prototype injection practice):

Number.prototype.isPositive = function () {
  console.log(this);
  if (this > 0) {
    console.log(`true`);
  } else console.log(`false`);
};

(5).isPositive();
(-3).isPositive();
