/***
 * 
 FUNCTION RETURN
 */

//All functions return undefined unless otherwise speciified
// return stops execution of the function immediately - if multiple returns implemented - it stops at tthe first one

function add(a, b) {
  console.log(4);
  return a + b;
  console.log(5); //not reached
  return a -b; //never executed
}

const sum = add(4, 4);
console.log(sum);

