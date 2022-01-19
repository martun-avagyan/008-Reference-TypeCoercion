"use strict";

// + Operator
console.log(null + undefined); // NaN (0 + NaN = NaN)
console.log(null + true); // 1 (0 + 1 = 1)
console.log(null + false); // 0 (0 + 0 = 0)
console.log(null + 3); // 3 (0 + 3 = 3)
console.log(null + NaN); // NaN (0 + NaN = NaN)
console.log(null + "hello"); // nullhello ("null" + "hello" = "nullhello")
console.log(undefined + true); // NaN (NaN + 1 = NaN)
console.log(undefined + false); // NaN (NaN + 0 = NaN)
console.log(undefined + 5); // NaN (NaN + 5 = NaN)
console.log(undefined + NaN); // NaN (NaN + NaN = NaN)
console.log(undefined + "hello"); // undefinedhello ("undefined" + "hello" = "undefinedhello")
console.log(true + false); // 1 (1 + 0 = 1)
console.log(true + 2); // 3 (1 + 2 = 3)
console.log(true + NaN); // NaN (Any operation with "NaN" returns "NaN")
console.log(true + "hello"); // truehello ("ture" + "hello")
console.log(false + 4); // 4 (0 + 4 = 4)
console.log(false + NaN); // NaN ("false" + "NaN")
console.log(false + "hello"); // falsehello ("false" + "hello")
console.log(5 + 3); // 8 (5 + 3 = 8)
console.log(5 + NaN); // NaN (Any operation with NaN returns NaN)
console.log(5 + "hello"); // 5hello ("5" + "hello")
console.log("hello" + NaN); // helloNaN ("hello" + NsN)

// Minus operator

console.log(null - undefined); // NaN (0 - NaN = NaN)
console.log(null - true); // -1 (0 - 1 = -1)
console.log(null - false); // 0 (0 - 0 = 0)
console.log(null - 3); // -3 (0 - 3 = 3)
console.log(null - NaN); // NaN (0 - NaN = NaN)
console.log(null - "hello"); // NaN (0 - NaN = NaN)
console.log(undefined - true); // NaN (NaN - 1 = NaN)
console.log(undefined - false); // NaN (NaN - 0 = NaN)
console.log(undefined - 5); // NaN (NaN - 5 = NaN)
console.log(undefined - NaN); // NaN (NaN - NaN = NaN)
console.log(undefined - "hello"); // NaN (NaN - NaN = NaN)
console.log(true - false); // 1 (1 - 0 = 1)
console.log(true - 2); // -1 (1 - 2 = -1)
console.log(true - NaN); // NaN (1 - NaN = NaN)
console.log(true - "hello"); // NaN (1 - NaN = NaN)
console.log(false - 4); // -4 (0 - 4 = -4)
console.log(false - NaN); // NaN (0 - NaN = NaN)
console.log(false - "hello"); // NaN (0 - NaN = NaN)
console.log(5 - 3); // 2 (5 - 3 = 2)
console.log(5 - NaN); // NaN (Any operation with NaN returns NaN)
console.log(5 - "hello"); // NaN (5 - NaN = NaN)
console.log("hello" - NaN); // NaN (NaN - NaN = 0)

// Multiplication operator

console.log(null * undefined); // NaN (0 * NaN = NaN)
console.log(null * true); // 0 (0 * 1 = 0)
console.log(null * false); // 0 (0 * 0 = 0)
console.log(null * 3); // 0 (0 * 3 = 0)
console.log(null * NaN); // NaN (0 * NaN = NaN)
console.log(null * "hello"); // NaN (0 * NaN = NaN)
console.log(undefined * true); // NaN (NaN * 1 = NaN)
console.log(undefined * false); // NaN (NaN * 0 = NaN)
console.log(undefined * 5); // NaN (NaN * 5 = NaN)
console.log(undefined * NaN); // NaN (NaN * NaN = NaN)
console.log(undefined * "hello"); // NaN (NaN * NaN = NaN)
console.log(true * false); // 0 (1 * 0 = 0)
console.log(true * 2); // 2 (1 * 2 = 2)
console.log(true * NaN); // NaN (1 * NaN = NaN)
console.log(true * "hello"); // NaN (1 * NaN = NaN)
console.log(false * 4); // 0 (0 * 4 = 0)
console.log(false * NaN); // NaN (0 * NaN = NaN)
console.log(false * "hello"); // NaN (0 * NaN = NaN)
console.log(5 * 3); // 15 (5 * 3 = 15)
console.log(5 * NaN); // NaN (Any operation with NaN returns NaN)
console.log(5 * "hello"); // NaN (5 * NaN = NaN)
console.log("hello" * NaN); // NaN (NaN * NaN = NaN)

// Division operator

console.log(null / undefined); // NaN (0 / NaN = NaN)
console.log(null / true); // 0 (0 / 1 = 0)
console.log(null / false); // NaN (0 / 0 = NaN)
console.log(null / 3); // 0 (0 / 3 = 0)
console.log(null / NaN); // NaN (0 / NaN = NaN)
console.log(null / "hello"); // NaN (0 / NaN = NaN)
console.log(undefined / true); // NaN (NaN / 1 = NaN)
console.log(undefined / false); // NaN (NaN / 0 = NaN)
console.log(undefined / 5); // NaN (NaN / 5 = NaN)
console.log(undefined / NaN); // NaN (NaN / NaN = NaN)
console.log(undefined / "hello"); // NaN (NaN / NaN = NaN)
console.log(true / false); // Infinity (1 / 0 = Infinity)
console.log(true / 2); // 0.5 (1 / 2 = 0.5)
console.log(true / NaN); // NaN (1 / NaN = NaN)
console.log(true / "hello"); // NaN (1 / NaN = NaN)
console.log(false / 4); // 0 (0 / 4 = 0)
console.log(false / NaN); // NaN (0 / NaN = NaN)
console.log(false / "hello"); // NaN (0 / NaN = NaN)
console.log(5 / 3); // 1.6666666666666667 (5 / 3 = 1.6666666666666667)
console.log(5 / NaN); // NaN (Any operation with NaN returns NaN)
console.log(5 / "hello"); // NaN (5 / NaN = NaN)
console.log("hello" / NaN); // NaN (NaN / NaN = NaN)

// Remainder operator

console.log(null % undefined); // NaN (0 % NaN = NaN)
console.log(null % true); // 0 (0 % 1 = 0)
console.log(null % false); // NaN (0 % 0 = NaN)
console.log(null % 3); // 0 (0 % 3 = 0)
console.log(null % NaN); // NaN (0 % NaN = NaN)
console.log(null % "hello"); // NaN (0 % NaN = NaN)
console.log(undefined % true); // NaN (NaN % 1 = NaN)
console.log(undefined % false); // NaN (NaN % 0 = NaN)
console.log(undefined % 5); // NaN (NaN % 5 = NaN)
console.log(undefined % NaN); // NaN (NaN % NaN = NaN)
console.log(undefined % "hello"); // NaN (NaN % NaN = NaN)
console.log(true % false); // NaN (1 % 0 = NaN)
console.log(true % 2); // 1 (1 % 2 = 1)
console.log(true % NaN); // NaN (1 % NaN = NaN)
console.log(true % "hello"); // NaN (1 % NaN = NaN)
console.log(false % 4); // 0 (0 % 4 = 0)
console.log(false % NaN); // NaN (0 % NaN = NaN)
console.log(false % "hello"); // NaN (0 % NaN = NaN)
console.log(5 % 3); // 2 (5 % 3 = 2)
console.log(5 % NaN); // NaN (Any operation with NaN returns NaN)
console.log(5 % "hello"); // NaN (5 % NaN = NaN)
console.log("hello" % NaN); // NaN (NaN % NaN = NaN)

// Is Equal To operator

console.log(null == undefined); // true (nul only == undefined)
console.log(null == true); // false (nul only == undefined)
console.log(null == false); // false (nul only == undefined)
console.log(null == 3); // false (nul only == undefined)
console.log(null == NaN); // false (nul only == undefined)
console.log(null == "hello"); // false (nul only == undefined)
console.log(undefined == true); // false (undefined only == null)
console.log(undefined == false); // false (undefined only == null)
console.log(undefined == 5); // false (undefined only == null)
console.log(undefined == NaN); // false (undefined only == null)
console.log(undefined == "hello"); // false (NaN==| NaN = NaN)
console.log(true == false); // false
console.log(true == 2); // false (Boolean type dont equal to Number type)
console.log(true == NaN); // false (NaN is not equal to anything)
console.log(true == "hello"); // false (Boolean type dont equal to String type)
console.log(false == 4); // false (Boolean type dont equal to Number type)
console.log(false == NaN); // false (NaN is not equal to anything)
console.log(false == "hello"); // false (Boolean type dont equal to String type)
console.log(5 == 3); // false
console.log(5 == NaN); // false (NaN is not equal to anything)
console.log(5 == "hello"); // false (Number type dont equal to String type)
console.log("hello" == NaN); // false (NaN is not equal to anything)

// Is Equal To(Strict) === operator

console.log(null === undefined); // false
console.log(null === true); // false
console.log(null === false); // false
console.log(null === 3); // false
console.log(null === NaN); // false
console.log(null === "hello"); // false
console.log(undefined === true); // false
console.log(undefined === false); // false
console.log(undefined === 5); // false
console.log(undefined === NaN); // false
console.log(undefined === "hello"); // false
console.log(true === false); // false
console.log(true === 2); // false
console.log(true === NaN); // false
console.log(true === "hello"); // false
console.log(false === 4); // false
console.log(false === NaN); // false
console.log(false === "hello"); // false
console.log(5 === 3); // false
console.log(5 === NaN); // false
console.log(5 === "hello"); // false
console.log("hello" === NaN); // false

// Greater Then operator

console.log(null > undefined); // false
console.log(null > true); // false (0 > 1 --> false)
console.log(null > false); // false (0 > 0 --> false)
console.log(null > 3); // false (0 > 3 --> false)
console.log(null > NaN); // false (Any operation with NaN returns NaN)
console.log(null > "hello"); // false (0 > NaN --> false)
console.log(undefined > true); // false (NaN > 1 --> false)
console.log(undefined > false); // false (NaN > 0 --> false)
console.log(undefined > 5); // false (NaN > 5 --> false)
console.log(undefined > NaN); // false (NaN > Nan --> false)
console.log(undefined > "hello"); // false (NaN > Nan --> false)
console.log(true > false); // true (1 > 0 --> true)
console.log(true > 2); // false (1 > 2 --> false)
console.log(true > NaN); // false (Any operation with NaN returns NaN)
console.log(true > "hello"); // false (1 > NaN --> false)
console.log(false > 4); // false (0 > 4 --> false)
console.log(false > NaN); // false (Any operation with NaN returns NaN)
console.log(false > "hello"); // false (0 > NaN --> false)
console.log(5 > 3); // true
console.log(5 > NaN); // false (Any operation with NaN returns NaN)
console.log(5 > "hello"); // false (5 > NaN --> false)
console.log("hello" > NaN); // false ((Any operation with NaN returns NaN)

// Less Then operator

console.log(null < undefined); // false (0 < NaN --> false)
console.log(null < true); // true (0 < 1 --> true)
console.log(null < false); // false (0 < 0 --> false)
console.log(null < 3); // true (0 < 3 --> true)
console.log(null < NaN); // false (Any operation with NaN returns NaN)
console.log(null < "hello"); // false (0 < NaN --> false)
console.log(undefined < true); // false (NaN < 1 --> false)
console.log(undefined < false); // false (NaN < 0 --> false)
console.log(undefined < 5); // false (NaN < 5 --> false)
console.log(undefined < NaN); // false (Any operation with NaN returns NaN)
console.log(undefined < "hello"); // false (NaN < Nan --> false)
console.log(true < false); // true (1 < 0 --> true)
console.log(true < 2); // true (1 < 2 --> true)
console.log(true < NaN); // false (Any operation with NaN returns NaN)
console.log(true < "hello"); // false (1 < NaN --> false)
console.log(false < 4); // true (0 < 4 --> true)
console.log(false < NaN); // false (Any operation with NaN returns NaN)
console.log(false < "hello"); // false (0 < NaN --> false)
console.log(5 < 3); // false
console.log(5 < NaN); // false (Any operation with NaN returns NaN)
console.log(5 < "hello"); // false (5 < NaN --> false)
console.log("hello" < NaN); // false (Any operation with NaN returns NaN)
