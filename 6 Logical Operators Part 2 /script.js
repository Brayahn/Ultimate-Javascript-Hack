/*
*

*/

let age = 19;
let isCool = true;

if (age > 18 && isCool) {
  console.log("You are over 18 and Cool as well");
} else {
  console.log("You do not meet the criteria");
}

//this returns the last truthy value, evaluated from left to right
console.log("truethy" && "yeah" && 5 && 8 && 9);

//this returns the first falsy value, evaluated from left to right
console.log("truethy" && false && 5 && 8 && 9);

//this returns first value, evaluated from left to right
//OR operator
console.log("" || "yeah" || 5 || 8 || 9);

//if all values are false, the last value is returned
console.log(false || NaN || undefined || "");

//getting the actual boolean type
console.log(!!"");
