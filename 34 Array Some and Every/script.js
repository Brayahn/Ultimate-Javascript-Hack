const numbers = [1, 2, 4, 5, 6, 6, 7, 7, 8, 88];

//Array Some
//Checks if at least one element passees the condition
const isGreaterthan4 = numbers.some((number) => number > 4);

console.log(isGreaterthan4);

/**
 * Array Every
 */
const isGreaterthan0 = numbers.every((number) => number > 0);
console.log(isGreaterthan0);
