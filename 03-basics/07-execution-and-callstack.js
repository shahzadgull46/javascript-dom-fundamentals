// EXECUTION CONTEXT = the environment where code runs
// CALL STACK        = the stack that keeps track of those running contexts

// Every function call creates an execution context, and that context is pushed onto the call stack while the function runs.

function one() {
  console.log("Start one");
  two();
  console.log("End one");
}

function two() {
  console.log("Start two");
  three();
  console.log("End two");
}

function three() {
  console.log("Inside three");
}

// one();


// Pratice:
// Example 1 — One function call
function greet() {
    console.log("Hello");
}

// console.log("Start");
// greet();
// console.log("End");

// Example 2 — Function calling another function

function first() {
    console.log("First start");
    second();
    console.log("First end");
}

function second() {
    console.log("Second");
}

// first();

// Example 3 — Three levels

function one() {
    console.log("1");
    two();
    console.log("4");
}

function two() {
    console.log("2");
    three();
    console.log("3");
}

function three() {
    console.log("Inside three");
}

one();


// -----------------------------------------------------------------------------
                    //  FLow


/*
                 JAVASCRIPT PROGRAM
                         │
                         ▼
              ┌─────────────────────┐
              │ Global Execution    │
              │ Context is created  │
              └──────────┬──────────┘
                         │
                         ▼
                Memory / setup phase
                         │
                         ▼
                Execution phase
                         │
                         ▼
              ┌─────────────────────┐
              │ Is a function      │
              │ called?             │
              └──────────┬──────────┘
                         │
                    YES  │
                         ▼
          Create Function Execution Context
                         │
                         ▼
              Push it onto Call Stack
                         │
                         ▼
                  Execute function
                         │
              ┌──────────┴──────────┐
              │                     │
       Calls another            No more calls
        function?                   │
              │                     │
             YES                    ▼
              │              Function finishes
              ▼                     │
      Create another                ▼
      Execution Context       Return value
              │                     │
              ▼                     ▼
       Push onto Stack        Pop function
              │                     │
              ▼                     ▼
          Execute it         Previous context
                                  resumes
                                     │
                                     ▼
                              Program continues

            stack follows this rule: LIFO

                    LAST IN
           ↓
      ┌─────────┐
      │ Function│ ← finishes FIRST
      ├─────────┤
      │ Function│
      ├─────────┤
      │ Function│
      ├─────────┤
      │ Global  │
      └─────────┘

*/