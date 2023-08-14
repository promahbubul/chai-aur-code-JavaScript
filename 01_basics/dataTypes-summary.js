// ********************* Primitive *********************

// 7 types: String, Number, boolean, null, undefined, Symbol, BigInt
// const score = 100;
// const scoreValue = 103.05;

// const isLoggedIn = false;
// const outSideTem = null;
// let outEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);


// const bigNumber = 235223510254n;
// console.log(typeof bigNumber);


// ************* Reference (Non Primitive) *************

// Array, Objects, Functions
// const friendName = ["Akbor", "Abdullah", "Muhammed", "Hassan"];

// let myObj = {
//     name : "Mahbubul Alam",
//     age: 21,
//     college: "Ananda Mohon College"
// }

// const myFunction = function() {
//     console.log("Hello Bangladesh");
// }

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

// let myYoutubeName = "promahbubul";

// let anotherName = myYoutubeName;
// anotherName = "sikhisikhai";

// console.log(anotherName);
// console.log(myYoutubeName);


// let userOne = {
//     email : 'user@gmail.com',
//     password: "522332Ma"
// }

// let userTwo = userOne
// userTwo.email = 'mahbub@google.com';

// console.log(userOne.email);
// console.log(userTwo.email);


// ++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// let myCompany = 'Brabo it Ltd';

// let anotherCompany =  myCompany;
// anotherCompany = 'Alfa it Ltd'

// console.log(anotherCompany);
// console.log(myCompany);

let userOne = {
    name: 'Mabubul Alam',
    address: 'Dhaka Nelkhat',
    phone: '01528252585'
}

let userTwo = userOne
userTwo.name = 'Muhammad Abdullah'

console.log(userTwo.name);
console.log(userOne.name);