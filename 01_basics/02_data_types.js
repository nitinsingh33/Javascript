// * Topic: JavaScript Data Types (Interview Flash Notes)
 

// ========================== Data Types ==========================

// JavaScript has 8 Data Types
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol
// 8. Object


// ========================== Primitive Data Types ==========================

// Immutable (Cannot be changed)
// Stored by Value

let num = 10;
let str = "Hello";
let isLoggedIn = true;
let value = undefined;
let empty = null;
let big = 12345678901234567890n;
let id = Symbol("id");


// ========================== Non-Primitive Data Types ==========================

// Mutable (Can be changed)
// Stored by Reference

const user = {
    name: "Nitin"
};

const arr = [1, 2, 3];

function greet() {}


// ========================== typeof ==========================

typeof 10;              // "number"
typeof "Hello";         // "string"
typeof true;            // "boolean"
typeof undefined;       // "undefined"
typeof null;            // "object" ⚠️ JS Bug
typeof Symbol();        // "symbol"
typeof 10n;             // "bigint"
typeof {};              // "object"
typeof [];              // "object"
typeof greet;           // "function"



// ========================== undefined ==========================

// Variable declared but not assigned

let age;

console.log(age);       // undefined



// ========================== null ==========================

// Intentional absence of value

let data = null;


// ========================== Primitive vs Reference ==========================

// Primitive -> Copy by Value

let a = 10;
let b = a;

b = 20;

// a = 10
// b = 20


// Reference -> Copy by Reference

let obj1 = { name: "Nitin" };
let obj2 = obj1;

obj2.name = "Rahul";

// obj1.name -> Rahul
// obj2.name -> Rahul



// ========================== Interview One-Liners ==========================

// Q. How many data types are there?
// 8 (7 Primitive + Object)


// Q. Primitive Data Types?
// Number, String, Boolean, Undefined,
// Null, BigInt, Symbol


// Q. Non-Primitive Data Types?
// Object (Arrays & Functions are Objects)


// Q. typeof null ?
// "object" (Historical JavaScript Bug)


// Q. Difference between undefined and null?
//
// undefined -> Variable declared but not assigned
// null -> Intentionally empty value


// Q. Primitive vs Non-Primitive?
//
// Primitive -> Stored by Value
// Object -> Stored by Reference



// ========================== Golden Rule ==========================

// Primitive -> Immutable + Copy by Value
// Object -> Mutable + Copy by Reference

// typeof null === "object" ⚠️
// Arrays & Functions are Objects