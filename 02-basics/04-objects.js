

const user ={
    name:"shahzad",
    address:{
        city: "shorkot"
    }
}


const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Shahzad" }
];


// console.log(user.address.city)
// console.log(user.address?.city)

// console.log( Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(user.hasOwnProperty("name"))
// console.log(user.hasOwnProperty("email"))

console.log(users[0].name)


// Object.assign()
const obj1 = {
    name: "Shahzad"
};

const obj2 = {
    age: 20
};
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

// Modern way: using spread operator
const obj3 = {...obj1 , ...obj2}
console.log(obj3);


// IMP Note: When we have duplicate keys in object the later value wins.
