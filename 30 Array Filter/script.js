const numbers = [-12, -4, -88, 6, 4, 0, 1, 2];

const positiveNumbers = numbers.filter((number) => {
  return number >= 0;
});

/**
 * 
 * 
 Alternatively, without {} means direct return

 const positiveNumbers = numbers.filter((number) => number >= 0;
);

 */

console.log(positiveNumbers);

/**
 *
 *
 */
const positiveNumbers1 = [];
//Using a forLoop to achieve the above
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 0) {
    positiveNumbers1.push(numbers[i]);
  }
}

console.log(positiveNumbers1);

/***
 *
 */

//  startup wants tto reward its employesss
//withh 7 hhours of overtime

const employeesData = [
  { name: "George", overtime: 9 },
  { name: "Mike", overtime: 4 },
  { name: "Ian", overtime: 10 },
  { name: "Nick", overtime: 13 },
];

const toReward = employeesData.filter((employee) => {
  if (employee.overtime >= 7) {
    console.log(employee.name, "received a reward");
  }
});
