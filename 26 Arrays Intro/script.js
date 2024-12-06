//Array declaration
const months = ["January", "February", "March"];

//get a specific month
console.log(months[2]);

//Replace an element

months[0] = "Not January";
console.log(months);

//add a mew element in the array
months[3] = "April";
console.log(months);

//Count of elements in the array
console.log(months.length);

//arrays can hold multiple data types in the Array
const random = [
  5,
  "Randdom Text",
  function () {
    alert("hello");
  },
  true,
];

console.log(random);

//looping through an array
for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}
