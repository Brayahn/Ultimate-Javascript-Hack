/*
*
Falsy Valuse
*/

if ([]) {
  console.log("IN HERE");
} else {
  console.log("NO, IN HERE");
}

/****
 * 
 * Everything is a truthy value except the below
 *
 False
 0
 ''
 null
 undefined 
 NaN
 */

/***
  * 
  * Truthy Values
  *
  1
  True
  'Any String'
  []
  {}
  */

const dogs = 5;

if (dogs) {
  console.log(`You have ${dogs} dogs`);
} else {
  console.log("You have no dogs");
}
