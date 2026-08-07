 // ! Topic: Closures (Interview Flash Notes)
 

// What is Closure?


/* A Closure is created when an inner function
remembers and accesses variables from its outer
function even after the outer function has finished execution.
*/


// Basic Example


function outer() {

    let count = 0;

    function inner() {

        count++;

        console.log(count);

    }

    return inner;

}

const counter = outer();

counter();      // 1
counter();      // 2
counter();      // 3


// Why?
//
// outer() finished execution,
// but inner() still remembers "count".


// =====================================================================
// Why Closure Works?
// =====================================================================

/* Functions in JavaScript remember
the Lexical Environment where they were created.
*/

// =====================================================================
// Lexical Environment
// =====================================================================

// Lexical = Where function is written,
// NOT where it is called.

let message = "Hello";

function greet(){

    console.log(message);

}

greet();


// greet() remembers "message"
// because it was created in that scope.


// =====================================================================
// Closure Stores Reference
// =====================================================================

// Closure stores reference to variables,
// NOT a copy.

function demo(){

    let x = 10;

    function show(){

        console.log(x);

    }

    x = 20;

    return show;

}

const fn = demo();

fn();      // 20


// If it stored a copy,
// output would have been 10.


// =====================================================================
// Private Variables (Most Important Use Case)
// =====================================================================

function createCounter(){

    let count = 0;

    return {

        increment(){

            count++;

        },

        getCount(){

            return count;

        }

    };

}

const counter1 = createCounter();

counter1.increment();

console.log(counter1.getCount());     // 1


// count cannot be accessed directly.


// =====================================================================
// Multiple Closures
// =====================================================================

const c1 = createCounter();

const c2 = createCounter();

c1.increment();

console.log(c1.getCount());      // 1

console.log(c2.getCount());      // 0


// Each closure has its own state.


// =====================================================================
// Common Uses of Closures
// =====================================================================

// • Data Hiding
// • Private Variables
// • Counters
// • Function Factories
// • Event Handlers
// • Callbacks
// • React Hooks
// • Memoization
// • Debouncing
// • Throttling


// =====================================================================
// Function Factory
// =====================================================================

function multiply(x){

    return function(y){

        return x * y;

    };

}

const double = multiply(2);

console.log(double(5));      // 10


// =====================================================================
// Common Mistake
// =====================================================================

// Using var inside loops.

for(var i=1;i<=3;i++){

    setTimeout(function(){

        console.log(i);

    },1000);

}

// Output
// 4
// 4
// 4


// Why?
//
// All callbacks share the same "i".


// Correct Way

for(let i=1;i<=3;i++){

    setTimeout(function(){

        console.log(i);

    },1000);

}

// Output
// 1
// 2
// 3


// =====================================================================
// Advantages
// =====================================================================

// ✅ Data Privacy
// ✅ State Preservation
// ✅ Memory Efficient
// ✅ Function Reusability


// =====================================================================
// Disadvantages
// =====================================================================

// ❌ Extra Memory Usage
// ❌ Can cause Memory Leaks
// if unnecessary references are kept.


// =====================================================================
// Interview One-Liners
// =====================================================================

// Q. What is Closure?
//
// A function that remembers variables
// from its outer scope even after
// the outer function has returned.


// Q. Why do closures work?
//
// Because functions remember their
// Lexical Environment.


// Q. Does Closure store values?
//
// No.
// It stores references to variables.


// Q. Give real-world use cases.
//
// Private Variables
// Counters
// Callbacks
// Event Listeners
// React Hooks
// Memoization


// Q. Why does var fail in loops?
//
// Because all callbacks share the same variable.


// Q. How to fix it?
//
// Use let
// or create a new closure.


// =====================================================================
// Golden Rules
// =====================================================================

// Closure = Function + Lexical Environment

// Inner function remembers outer variables

// Variables stay alive
// while closure exists

// Closures store references,
// NOT copies

// Every function creates a closure

// Every call creates a new closure