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

/*
2. ARRAYS IN JAVASCRIPT
--------------------------------------------*/

let arr = [1, 2, 3];

// Add/Remove
arr.push(4); // adds element at end
arr.pop(); // removes last element // removes last element
arr.unshift(0); // adds element at start // adds element at start
arr.shift(); // removes first element // removes first element

// Searching
arr.indexOf(2); // finds index of element(2); // finds index of element(2);
arr.includes(3); // checks existence of element(3); // checks existence of element(3);

// Transform
arr.map(x => x * 2); // applies function to each item(x => x * 2); // applies function to each item(x => x * 2);
arr.filter(x => x > 1); // filters elements by condition(x => x > 1); // filters elements by condition(x => x > 1);
arr.reduce((total, x) => total + x, 0); // accumulates values into one((total, x) => total + x, 0); // accumulates values into one((total, x) => total + x, 0);

// Utility
arr.slice(1, 3); // extracts portion without modifying original(1, 3); // extracts portion without modifying original(1, 3);
arr.splice(1, 1); // modifies array by removing/adding elements(1, 1); // modifies array by removing/adding elements(1, 1);
arr.join("-"); // joins array into string("-"); // joins array into string("-");

// Spread & Rest
let newArr = [...arr]; // spread operator copies array [...arr]; // spread operator copies array [...arr];
function sumAll(...nums) { return nums; }

/*
3. OBJECTS IN JAVASCRIPT
--------------------------------------------*/

let user = {
name: "Maddy",
age: 18,
isAdmin: false
};

// Accessing
user.name;
user["age"];

// Adding / Removing
user.city = "Lucknow";
delete user.isAdmin;

// Looping
for (let key in user) {
console.log(key, user[key]);
}

// Looping with forEach (using Object.keys)
Object.keys(user).forEach(key => {
console.log(key, user[key]); // iterates through object properties
});

// Methods
let obj = {
  greet() {
   console.log("Hello");
  }
};
obj.greet(); // calls the greet method

/*
4. FUNCTIONS & RETURN
--------------------------------------------*/

function add(a, b) {
return a + b;
}

const multiply = function(a, b) {
return a * b;
};

const subtract = (a, b) => a - b;

function greet(name = "User") {
console.log("Hi", name);
}

/*
5. ASYNCHRONOUS JAVASCRIPT
--------------------------------------------*/
// Synchronous -> Line by line code chale isey kahte hain synchronous code
// Asynchronous -> Jo bhi code async nature ka ho , usey side stack mein bhej do and aglen code ko chalao jo bhi sync nature ka ho, jab bhi sara sync code chal jaye, tab check karo ki async code complete hua ya nahi and agar wo complete hua ho to usey main stack mein lao and chala do. isey kehte hain asynchronous code

async function fetchData() {
    var blob = await fetch('https://randomuser.me/api/')
    var result = await blob.json();
    console.log(result);
}
fetchData();