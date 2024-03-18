//outer function / Parent Function
const outer = () => {
  const outerVar = "Hello";

  //inner function
  const inner = () => {
    const innerVar = "Hi there";
    console.log(innerVar, outerVar);
  };
  return inner;
};

//calling an inner function
const innerFn = outer();

innerFn();

/****
 * 
 Second Example
 */

const init = () => {
  const hobby = "Learning Swimming"; //local variabble from init function

  const displayHobby = () => {console.log(hobby)};//inner function using a variabble from the outer function

  displayHobby()
};

init();