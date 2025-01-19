//The array.includes() command checks if an array contains a certain value handed to it and returns "true" or "false" based on the result.

const books = ["Liar Liar", "Lone Wolf", "Taken", "Forgivenness"];

console.log(books.includes("Liar Liar"));

if (books.includes("Liar Liar")) {
  console.log("Ye, we have this in stock");
} else {
  console.log("Sorry, not in stock");
}

//This method is case sensitive
