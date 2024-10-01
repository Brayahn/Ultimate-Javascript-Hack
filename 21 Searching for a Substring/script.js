const hobbies = "I love gaming so much; gaming is life";

//returns index of a speciified character, the 0 parameter is optional, defines index where to begin search
const firstindex = hobbies.indexOf("gaming", 0);
console.log(firstindex);

//gets the last index of a string, searches from the end to the beginning
const lastindex = hobbies.lastIndexOf("gaming");
console.log(lastindex);

const includesgaming = hobbies.includes('gaming');
console.log(includesgaming);

//The below check on the first and last letter respectively
console.log (hobbies.startsWith('I love'));
console.log(hobbies.endsWith('lif'));



