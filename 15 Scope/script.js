/***
 * 
 * 
 We have three types of scopes:

    Global Scope
    Local Scope
    Block Scope (only with let
    and
    const
    )
 */

//Global Scope
const name = "brian";

const myfunction = () => {
  console.log(name);
};

myfunction();

// Global Scope

const someFunction = () => {
  // Local Scope #1

  const anotherFunction = () => {
    // Local Scope #2
  };
};

if (true) {
  // this 'if' conditional block doesn't create a scope

  // name is in the global scope because of the 'var' keyword
  var name2 = "Adrian";
  // likes is in the local scope because of the 'let' keyword
  let likes = "Coding";
  // skills is in the local scope because of the 'const' keyword
  const skills = "JavaScript and PHP";
}

console.log(name2); // logs 'Adrian'
console.log(likes); // Uncaught ReferenceError: likes is not defined
console.log(skills); // Uncaught ReferenceError: skills is not defined

/**
   Advantages of using Global variables

    -You can access the global variable from all the functions or modules in a program
    -It is ideally used for storing "constants" as it helps you keep the consistency.
    -A Global variable is useful when multiple functions are accessing the same data.

Disadvantages of using Global Variables

    -Too many variables declared as global, then they remain in the memory till program execution is completed. This can cause of Out of Memory issue.
    -Data can be modified by any function. Any statement written in the program can change the value of the global variable. This may give unpredictable results in multi-tasking environments.
    -If global variables are discontinued due to code refactoring, you will need to change all the modules where they are called.

   */

/**
     Advantages of using Local Variables

    The use of local variables offer a guarantee that the values of variables will remain intact while the task is running
    You can give local variables the same name in different functions because they are only recognized by the function they are declared in.
    Local variables are deleted as soon as any function is over and release the memory space which it occupies.

Disadvantages of using Local Variables

    They have a very limited scope.

This isn't necessarily a disadvantage, but if you ever find yourself needing to use that variable in a parent scope, just declare it there. Let's me use the above example to show you what I mean.


     */

/*
KEY DIFFERENCE

    Local variable is declared inside a function whereas Global variable is declared outside the function.
    Local variables are created when the function has started execution and is lost when the function terminates, on the other hand, Global variable is created as execution starts and is lost when the program ends.
    Local variable doesn’t provide data sharing whereas Global variable provides data sharing.
    Local variables are stored on the stack whereas the Global variable are stored on a fixed location decided by the compiler.
    Parameters passing is required for local variables whereas it is not necessary for a global variable


*/
