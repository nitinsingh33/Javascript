
 // * Topic: Variables (Interview Flash Notes)

// Hoisting:
// JS processes declarations before execution.

// TDZ:
// Accessing let/const before initialization => ReferenceError.

// ========================== var ==========================

// ❌ Avoid using in modern JavaScript
// • Function Scoped
// • Can Redeclare ✅
// • Can Reassign ✅
// • Hoisted -> initialized with undefined
// • Not Block Scoped


// ========================== let ==========================

// • Block Scoped
// • Cannot Redeclare ❌
// • Can Reassign ✅
// • Hoisted but stays in TDZ


// ========================== const ==========================

// • Block Scoped
// • Cannot Redeclare ❌
// • Cannot Reassign ❌
// • Must Initialize while declaration



// ========================== Scope ==========================

// var  -> Function Scope
// let  -> Block Scope
// const -> Block Scope


// ========================== Hoisting ==========================

// var
console.log(x);      // undefined
var x = 10;

// let / const
// Access before initialization
// => ReferenceError (TDZ)


// ========================== TDZ ==========================

// Temporal Dead Zone
// Time between entering scope and initialization
// Accessing let/const before initialization
// => ReferenceError


// ========================== const Objects ==========================

// const DOES NOT make object immutable

const user = { name: "Nitin" };

user.name = "Rahul";      // ✅ Allowed

// user = {}              // ❌ Not Allowed


// ========================== Redeclare vs Reassign ==========================

// Redeclare
// let a = 10;
// let a = 20;        ❌

// Reassign
let score = 90;
score = 100;         // ✅


// ========================== Interview One-Liners ==========================

// Q. Difference between var, let and const?
//
// var   -> Function Scope | Redeclare ✅ | Reassign ✅
// let   -> Block Scope    | Redeclare ❌ | Reassign ✅
// const -> Block Scope    | Redeclare ❌ | Reassign ❌


// Q. Does const make object immutable?
// ❌ No


// Q. Why avoid var?
// Because it is function scoped and can be redeclared.


// ========================== Golden Rule ==========================

// const -> Default choice
// let   -> When value changes
// var   -> Avoid