"use strict";

console.log(-null); // -0
console.log(-undefined); // NaN
console.log(-true); // -1
console.log(-false); // -0
console.log(-5); // -5
console.log(-"hello"); // NaN
console.log(-"234"); // -234
console.log(-"234.32e3"); // -234320
console.log(-new Number(NaN)); // NaN
console.log(-new String("hello")); // NaN
console.log(-/google.com/); // NaN
console.log(-[]); // -0
console.log(-[2]); // -2
console.log(-[2, 3]); // NaN
console.log(-function () {}); // Nan
