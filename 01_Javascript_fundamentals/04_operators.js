// * Topic: JavaScript Operators (Interview Flash Notes)
 


// =====================================================================
// Arithmetic Operators
// =====================================================================

10 + 5;     // 15
10 - 5;     // 5
10 * 5;     // 50
10 / 5;     // 2
10 % 3;     // 1
2 ** 3;     // 8

// ++ Increment
// -- Decrement



// =====================================================================
// Assignment Operators
// =====================================================================

let x = 10;

x += 5;     // 15
x -= 5;
x *= 2;
x /= 2;
x %= 3;



// =====================================================================
// Comparison Operators
// =====================================================================

5 == "5";       // true
5 === "5";      // false

5 != "5";       // false
5 !== "5";      // true

5 > 2;
5 < 2;
5 >= 5;
5 <= 4;


// Prefer === and !==


// =====================================================================
// Logical Operators
// =====================================================================

// AND

true && true;       // true

// OR

true || false;      // true

// NOT

!true;              // false



// =====================================================================
// Short-Circuit Evaluation
// =====================================================================

// ||

let username = "" || "Guest";

// username -> "Guest"


// &&

true && "Hello";        // Hello

false && "Hello";       // false



// =====================================================================
// Nullish Coalescing (??)
// =====================================================================

// Returns right value only if left is
// null or undefined

null ?? "Guest";        // Guest

undefined ?? "Guest";   // Guest

0 ?? 100;               // 0

"" ?? "Default";        // ""



// =====================================================================
// OR (||) vs Nullish (??)
// =====================================================================

// ||

0 || 100;           // 100

"" || "Hello";      // Hello


// ??

0 ?? 100;           // 0

"" ?? "Hello";      // ""



// =====================================================================
// Ternary Operator
// =====================================================================

// condition ? true : false

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";



// =====================================================================
// Optional Chaining (?.)
// =====================================================================

const user = {
    name: "Nitin"
};

user.address?.city;

// undefined
// No Error



// =====================================================================
// Spread Operator (...)
// =====================================================================

// Copy Array

const arr1 = [1,2];

const arr2 = [...arr1];

// Merge Arrays

const arr3 = [...arr1, ...arr2];


// Copy Object

const obj1 = { name: "Nitin" };

const obj2 = { ...obj1 };



// =====================================================================
// Rest Operator (...)
// =====================================================================

// Collect remaining values

function sum(...numbers){

    console.log(numbers);

}



// =====================================================================
// typeof Operator
// =====================================================================

typeof 10;          // number

typeof "JS";        // string

typeof null;        // object ⚠️

typeof [];          // object



// =====================================================================
// delete Operator
// =====================================================================

const student = {

    name: "Nitin",

    age: 22

};

delete student.age;



// =====================================================================
// Operator Precedence
// =====================================================================

// () Highest Priority

2 + 3 * 4;          // 14

(2 + 3) * 4;        // 20



// =====================================================================
// Interview One-Liners
// =====================================================================

// Q. Difference between == and === ?
//
// ==  -> Type Conversion
// === -> Strict Comparison


// Q. Difference between || and ?? ?
//
// || -> Checks Falsy values
// ?? -> Checks only null & undefined


// Q. Spread Operator?
//
// Expands Array/Object


// Q. Rest Operator?
//
// Collects multiple values


// Q. Optional Chaining?
//
// Prevents error if property doesn't exist.


// Q. Ternary Operator?
//
// Short form of if-else.



// =====================================================================
// Golden Rules
// =====================================================================

// Prefer === over ==

// Prefer ?? over ||
// when 0 or "" are valid values

// Use ?. to avoid undefined errors

// Spread -> Expand
// Rest -> Collect