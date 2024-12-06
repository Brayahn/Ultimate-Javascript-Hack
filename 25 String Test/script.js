const guestList = "Our guests are: emma, jacob, isabella, ethan";

//Get a length of the string. Store it in a variable called length.
const guestList_length = guestList.length;
console.log(guestList_length);

//Uppercase the entire string. Store the result in a variablle called uppercasedGuestList.
const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList);

//Check whether 'ETHAN' is on the uppercasedGuestList. Store the answer in a variable called isEthanOnTheList. The data type of the variable must be a boolean.
const isEthanOnTheList = uppercasedGuestList.includes("ETHAN");
console.log(isEthanOnTheList);
//Create a substring that only contains the following: 'EMMA, JACOB, ISABELLA, ETHAN'. Store the answer in a variable called substringGuests.
const substringGuests = uppercasedGuestList.slice(
  uppercasedGuestList.indexOf("EMMA")
);
console.log(`'`, substringGuests, `'`);
//Out of the substring you just created, create an array of names of people that are on the list. Store that array in a variable called guests.
const guests = substringGuests.split(",");
console.log(guests);
