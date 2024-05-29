// few technical terminology for interview propose


// ----------------------------------------------
// 1. function statement /named function

function sayHii() {
    return 'hello'
}
console.log(sayHii());
// ----------------------------------------------

// 2. function expression
// #function are first class citizen
// #function can be assign as value

// let sum = function (a, b) {
//     return a+b
// }
// console.log(sum(5,6));

// ----------------------------------------------

// 3. anonymous function
// function without name is called  anonymous function

// function() {
    
// }

// --------------------------------------------------------------------------------------

// 4. callback function:- function which are passed as Parameters inside another function

// function parent(program) {
//     return program()
// }
// function greet() {
//     return "hello"
// }
// console.log(parent(greet));

// ----------------------------------------------

// 5.higher order function (HOF)

// function which are passed as Parameters inside another function this function called as a higher order function

// --------------------------------------
// function parent(program) {
//     return program()                     ------------->>>> here this function is called as a higher ordr function
// }
// ------------------------------------------
// function greet() {
//     return "hello"
// }
// console.log(parent(greet));

// ----------------------------------------------