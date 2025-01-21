//Dot Notation

const person = { firstName: "Rose" };

person.age = 30;
person.dog = { name: "fluffy", breed: "Chiiwawa" };

console.log(person.dog.name);

//Square Bracket Notation

//It is also used when we have key names that are not usual JavaScript variable names:It is also used when we have key names that are not usual JavaScript variable names:
person["this-is-a-key-with-dashes"];

person["this is another key"];

//accessing inner keys on square notation
console.log(person["dog"]["name"]);

/**
 *
 *
 */

const property = "age";

/**
 * ...but it also has some additional features, for example, we can access propererties dynamically. Let me show you what I mean:
 */
person[property];
