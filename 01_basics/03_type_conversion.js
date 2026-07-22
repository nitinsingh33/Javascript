// * Topic: Type Conversion (Interview Flash Notes)



// =====================================================================
// Explicit Type Conversion (Type Casting)
// =====================================================================

// Manually converting one data type into another.

// String -> Number

Number("123");        // 123
Number("123abc");     // NaN
Number("");           // 0
Number(null);         // 0
Number(undefined);    // NaN
Number(true);         // 1
Number(false);        // 0


// Number -> String

String(123);          // "123"
(123).toString();     // "123"


// Other -> Boolean

Boolean(1);           // true
Boolean(0);           // false
Boolean("");          // false
Boolean("Hello");     // true
Boolean(null);        // false
Boolean(undefined);   // false
Boolean(NaN);         // false
Boolean([]);          // true
Boolean({});          // true



// =====================================================================
// Implicit Type Conversion (Coercion)
// =====================================================================

// JavaScript automatically converts data types when needed.

"5" + 2;              // "52"
"5" - 2;              // 3
"5" * 2;              // 10
"5" / 2;              // 2.5

true + 1;             // 2
false + 1;            // 1
null + 1;             // 1
undefined + 1;        // NaN



// =====================================================================
// Truthy & Falsy Values
// =====================================================================

// Falsy Values (Only 8)

false
0
-0
0n
""
null
undefined
NaN

// Everything else is Truthy

// []         compiler error de rha tha isliye comment kiya h nothing else
   {}
   "0"
   "false"
   " "
   42



// =====================================================================
// == vs ===
// =====================================================================

// ==
// Loose Equality
// Performs Type Conversion

5 == "5";             // true
null == undefined;    // true
0 == false;           // true
"" == false;          // true


// ===
// Strict Equality
// No Type Conversion

5 === "5";            // false
0 === false;          // false
null === undefined;   // false



// =====================================================================
// NaN (Not a Number)
// =====================================================================

// Represents an invalid numeric result.

Number("abc");        // NaN

typeof NaN;           // "number" ⚠️

// Checking NaN

Number.isNaN(NaN);    // true



// =====================================================================
// parseInt() vs Number()
// =====================================================================

parseInt("123px");    // 123
Number("123px");      // NaN

parseFloat("12.5px"); // 12.5



// =====================================================================
// Common Interview Tricky Outputs
// =====================================================================

"5" + 2;              // "52"

"5" - 2;              // 3

true + true;          // 2

[] + [];              // ""

[] + {};              // "[object Object]"

{} + [];              // 0 (depends on context)

null == undefined;    // true

null === undefined;   // false

Boolean([]);          // true

Boolean({});          // true

Boolean("");          // false



// =====================================================================
// Interview One-Liners
// =====================================================================

// Q. Explicit Type Conversion?
// Manual conversion using Number(), String(), Boolean().

// Q. Implicit Type Conversion?
// Automatic conversion by JavaScript.

// Q. Difference between == and === ?
//
// ==  -> Compares after type conversion
// === -> Compares value + type (Recommended)

// Q. Falsy Values?
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN

// Q. typeof NaN?
//
// "number"

// Q. typeof null?
//
// "object" (Historical Bug)

// Q. parseInt() vs Number()?
//
// parseInt("123px") -> 123
// Number("123px") -> NaN



// =====================================================================
// Golden Rules
// =====================================================================

// ✅ Prefer === over ==

// Know all 8 falsy values

// Number("123") -> 123
// Number("abc") -> NaN

// Boolean([]) -> true
// Boolean({}) -> true

// typeof null -> "object"
// typeof NaN -> "number"

// parseInt() extracts numbers
// Number() converts the whole value