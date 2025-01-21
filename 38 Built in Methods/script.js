//Method is a function associated wiith an object

const dog = {
  hisName: "Fluffy",
  //Functions can be declared by either of the 3 options below.
  //Arrow function is most recommended
  myMethhod1: () => {
    console.log("Woof! Woof! Woof");
  },
  myMethod2() {},

  //has access to 'this' keyword
  myMethod3: function () {
    console.log(this.hisName);
  },
};

dog.myMethod3();

dog.myMethhod1();
