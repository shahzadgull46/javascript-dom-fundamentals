

function parent() {
    const username = "Shahzad";

    function child() {
        const website = "github";
        console.log(username);
    }

    child();

    console.log(website);
}

// parent();

// Child can access parent's var but a parent can not access its child var

// Practice 2 — Function Declaration -> It will executes successfully
sayHello();

function sayHello() {
    console.log("Hello");
}


// Now compare it with a function expression -> throws error
sayHello();

const sayHello = function () {
    console.log("Hello");
};


// Function declaration
// → can call before definition ✅

// Function expression with const
// → call before definition ❌

