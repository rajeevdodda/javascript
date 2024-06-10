//  Introduction to functions

// Function Declarations are hoisted to the top of the enclosing script or function
function square(x) {
  // x => paramters ; square => function name
  console.log("Invocation context in square function : ", this); // this => invocation context (global object)
  return x * x; // return => return value
}

console.log(square(5)); // 25
console.log("typeof square : ", typeof square); // function
console.log("instanceof square function is object: ", square instanceof Object); // true
console.log(typeof square === "function"); // true

const user = {
  name: "John",
  displayName: function () {
    console.log("Invocation context in user object : ", this); // this => user object
    console.log(this.name); // John
  },
};

user.displayName(); // John

function printprops(o) {
  console.log(o);
  for (let p in o) {
    console.log(p + ": " + o[p] + "\n");
  }
}

printprops(user);
printprops(123);

// Function Expressions are not hoisted

// Anonymous Function Expression
const cube = function (x) {
  return x * x * x;
};

try {
  fact(5); // ReferenceError: Cannot access 'fact' before initialization
} catch (e) {
  console.log(e);
}

// Function Expressions with name
const f = function fact(x) {
  if (x <= 1) return 1;
  return x * fact(x - 1);
};

// Function Expressions  as arguments to other function
const numbers = [1, 2, 3, 6, 5];
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);
