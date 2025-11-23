// JavaScript Backend Notes
// --------------------------------------------
/*
1. FUNDAMENTALS OF JAVASCRIPT
--------------------------------------------*/
let count = 10;
const PI = 3.14;

// Data Types
// string, number, boolean, null, undefined, bigint, symbol

// Type Conversion
Number("20"); // 20
String(50); // "50"
Boolean(0); // false

// Operators
let sum = 5 + 10;
let check = (10 === "10"); // false
let isTrue = (5 > 3) && (2 < 4);

// Control Flow
if (count > 5) {
console.log("Greater than 5");
}

for (let i = 0; i < 3; i++) {
console.log(i);
}