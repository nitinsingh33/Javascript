// * Topic: this Keyword (Interview Flash Notes)



// What is 'this' ?


// 'this' refers to the object that is currently executing the function.

// IMPORTANT:
// 'this' is determined at CALL TIME,
// NOT where the function is defined.


// =====================================================================
// Global Context
// =====================================================================

// Browser
console.log(this);      // window

// Node.js
console.log(this);      // module.exports (top-level)


// =====================================================================
// Inside an Object Method
// =====================================================================

const user = {

    name: "Nitin",

    greet() {

        console.log(this.name);

    }

};

user.greet();       // Nitin

// this -> user



// =====================================================================
// Regular Function
// =====================================================================

function show(){

    console.log(this);

}

show();

// Browser (Non-Strict) -> window
// Strict Mode -> undefined
// Node.js -> depends on module/runtime



// =====================================================================
// Arrow Function
// =====================================================================

// Arrow functions DO NOT have their own 'this'.

// They inherit 'this' from the surrounding (lexical) scope.

const obj = {

    name: "JavaScript",

    arrow: () => {

        console.log(this);

    }

};

obj.arrow();


// =====================================================================
// Method vs Arrow Function
// =====================================================================

const person = {

    name: "Nitin",

    regular() {

        console.log(this.name);

    },

    arrow: () => {

        console.log(this.name);

    }

};

person.regular();      // Nitin

person.arrow();        // undefined (or outer this)


// Don't use arrow functions as object methods
// when you need 'this'.



// =====================================================================
// call(), apply(), bind()
// =====================================================================

function introduce(city){

    console.log(this.name, city);

}

const student = {

    name: "Nitin"

};


// call()

introduce.call(student, "Delhi");


// apply()

introduce.apply(student, ["Delhi"]);


// bind()

const fn = introduce.bind(student);

fn("Delhi");



// =====================================================================
// Difference
// =====================================================================

// call()
// Executes immediately
// Arguments separately

// apply()
// Executes immediately
// Arguments as array

// bind()
// Returns new function
// Executes later



// =====================================================================
// Constructor Function
// =====================================================================

function User(name){

    this.name = name;

}

const u = new User("Nitin");

// this -> Newly created object



// =====================================================================
// Class
// =====================================================================

class Car{

    constructor(name){

        this.name = name;

    }

}

const c = new Car("BMW");



// =====================================================================
// Event Listener (Interview)
// =====================================================================

// button.addEventListener("click", function () {
//     console.log(this);      // Button
// });

// button.addEventListener("click", () => {
//     console.log(this);      // Outer lexical this
// });



// =====================================================================
// Interview One-Liners
// =====================================================================

// Q. What is 'this'?
//
// Reference to the object
// that calls the function.


// Q. Does arrow function have its own this?
//
// No.
// It inherits from surrounding scope.


// Q. Difference between regular & arrow function?
//
// Regular -> Own this
// Arrow -> Lexical this


// Q. call(), apply(), bind()?
//
// call() -> Immediate
// apply() -> Immediate (Array args)
// bind() -> Returns new function


// Q. What does 'new' do?
//
// Creates new object
// and binds 'this' to it.



// =====================================================================
// Golden Rules
// =====================================================================

// this depends on HOW a function is called,
// NOT where it is written.

// Regular Function -> Dynamic this

// Arrow Function -> Lexical this

// Object Method -> this = Object

// Constructor -> this = New Object

// call/apply/bind -> Manually set this

// Avoid arrow functions
// for object methods if using this.