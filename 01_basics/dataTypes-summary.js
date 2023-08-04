// ********************* Primitive *********************

// 7 types: String, Number, boolean, null, undefined, Symbol, BigInt
const score = 100;
const scoreValue = 103.05;

const isLoggedIn = false;
const outSideTem = null;
let outEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 235223510254n;
console.log(typeof bigNumber);


// ************* Reference (Non Primitive) *************

// Array, Objects, Functions
const friendName = ["Akbor", "Abdullah", "Muhammed", "Hassan"];

let myObj = {
    name : "Mahbubul Alam",
    age: 21,
    college: "Ananda Mohon College"
}

const myFunction = function() {
    console.log("Hello Bangladesh");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3