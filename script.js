'use strict';
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//     } else {
//       console.log('You are not a millenial');
//     }
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Su';
// calcAge(1997);
// //console.log(firstName);
// //console.log(age); error due to scoping
// //printAge(); error due to scoping
//Why Hoisting?
//Using functions before actual declaration;
//var hoisting is just a byproduct

//Why Temporal Dead Zone, Let and Const
//Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice and should be avaoided
//Makes const variables actually work

//Hoisting and TDZ in Practice
//Variables
// console.log(me); // undefined
// console.log(job); //uncaught Reference error
//console.log(year);//uncaught Reference error
// var me = 'Su';
// let job = 'Developer';
// const year = 1997;

// //Functions
// console.log(addDecl(2, 3)); //5 only function decl works before declaring
// console.log(addExpr(2, 3)); //Uncaught RefError
// console.log(addArrow(2, 3)); //Uncaught RefError

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products are deleted!');
}
//conclusion: Dont use var, use only const and let

//Example2
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false
