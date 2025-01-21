const sessionInfo = {
  OS: "Ubuntu",
  License: "Open Source",
  Time: "2200 hrs",
  Location: "Nairobi",
};

// Object.keys() creates an array containing the keys of an object
const detailsSession = Object.keys(sessionInfo);
console.log(detailsSession);

// Object.values() creates an array containing the values of an object
const detailsSession1 = Object.values(sessionInfo);
console.log(detailsSession1);

// Object.entries() creates a nested array of  the key/value pairs of an object
const detailsSession2 = Object.entries(sessionInfo);
detailsSession2.forEach((entry) => {
  /***
   Let key = entry[0];
   let value = entry[1];
   */
  console.log(entry[0], ":", entry[1]);
});

// Object.freeze() prevents modification of existing properties and prevents properties from being added or removed
const user = {
  username: "admin",
  password: "dsfsdfs",
};
Object.freeze(user);

// Object.seal() prevents new properties from being added to an object but allows modification of existing properties.
Object.seal(user);
console.log(user);
