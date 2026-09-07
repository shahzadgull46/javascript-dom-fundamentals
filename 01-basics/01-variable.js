

const accountId = 12344;
let accountMail = "shahzad@gmail.com"
var accountPassword = "12345"
accountCity = "shorkot"

         // const value can not be changed
// accountId = 566
console.log(accountId)

accountMail = "hello@gmail.com"
accountPassword = "345"
accountCity = "jhung"

console.table([accountMail,accountPassword,accountCity])

/*
Prefer not to use var because of issue in block scope and functional scope
*/