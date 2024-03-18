"use strict";
let a = 10;
let b = 8;
//CHECK VALUE  (==)
let equalTo = a == b;
console.log(equalTo);
//CHECKED VALUE STRICTLY (WITH ITS DATA TYPE): (===)
let equalToStrictly = a === b;
console.log(equalToStrictly);
//CHECK VALUE NOT EQUAL TO:  (!== )
let notEqualto = a !== b;
console.log(notEqualto);
// CHECK VALUE GREATERTHAN: (>)
let greaterthan = a > b;
console.log(greaterthan);
//CHECK VALUE LESSTHAN: (<)
let lessthan = a < b;
console.log(lessthan);
//CHECK VALUE EQUALTO GREATERTHAN:(<=)
let equaltogreaterthan = a >= b;
console.log(equaltogreaterthan);
//CHECK VALUE EQUALTO LESSTHAN: (>=)
let equaltolessthan = a <= b;
console.log(equaltolessthan);
