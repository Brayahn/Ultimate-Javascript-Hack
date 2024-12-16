const names = ["Jon", "Bob", "David", "Mark"];

// Array Push - Adds a new value to the end of the array.
names.push("Dean");

console.log(names.push("Dean")); // 5

// Array Pop - Deletes the last element of an array
const removeITem = names.pop();
console.log(removeITem); //returns the removed element

// Array Shift - Deletes the first element of an array
names.shift();
console.log(names);

// Array Unshift - Adds a new value to the start of an array
names.unshift("Brian");
console.log(names);

// Array Splice - It adds/removes values from any position of an array
names.splice(2, 0, "Jenny", "John"); //at posiition 2, we delete 0 elements and add 2 elements
console.log(names);

// Array Slice - Copies certain parts of an array into a newely created array
const noOneLikesBob = names.slice(2, 5); //2 and 5 are the starting and ending index

console.log(noOneLikesBob);
