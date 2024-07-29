// ***************** Introduction to objects in JavaScript  *****************

// ########## 6.1 Introduction to objects

console.log("********** 6.1 Introduction to objects **********");
const symbol = Symbol("id");
const obj = {
  name: "John Doe", // string
  "": "empty string", // empty string
  symbol: 1234, // symbol
  1: "number key", // number key
  "hello world": "string key", // string key
  null: null, // null
  undefined: undefined, // undefined
  true: true, // boolean
  false: false, // boolean
};

console.log("obj", obj);
console.log("---------------------------------------------------------");
// ------------------------------------------------------------------------

// ########## 6.2 Creating objects
// 6.2.1 Object literals

console.log("********** 6.2 Creating objects **********");
const objectLiteral = {
  date: new Date(),
};

for (let index = 0; index < 5; index++) {
  const objectLiteralLoop = {
    date: new Date(),
  };
  console.log("objectLiteral", objectLiteral);
  console.log("objectLiteralLoop", objectLiteralLoop); // new object created every time and value changes
}
console.log("---------------------------------------------------------");

// 6.2.2 Creating objects with new

console.log("**********  6.2.2 Creating objects with new ********** ");
const objNew = new Object();
const arry = new Array();
const date = new Date();
const map = new Map();
console.log("objNew", objNew);
console.log("arry", arry);
console.log("date", date);
console.log("map", map);
console.log("---------------------------------------------------------");
// 6.2.3 Prototypes

// 6.2.4 Object.create()
console.log("**********  6.2.4 Object.create() ********** ");

let x = Object.create({ name: "John" });
console.log("object create", x, x.toString());
let objectNull = Object.create(null);
try {
  console.log("object create null", objectNull, objectNull?.toString());
} catch (e) {
  console.log(objectNull, "object create null", e);
}
console.log("Empty obecject", Object.create(Object.prototype));

let o = { x: "dont change this value" };
let o2 = { x: "change this value" };
function changeObject(obj) {
  obj.x = "changed value";
}
changeObject(Object.create(o));
changeObject(o2);
console.log("o", o);
console.log("o2", o2);

console.log("---------------------------------------------------------");

// ########## 6.3 Querying and Setting Propeties
console.log("**********  6.3 Querying and Setting Propeties ********** ");
function returnString() {
  return "main title";
}

const book = {};

book[returnString()] = "Hello World";
console.log("book", book);
console.log("---------------------------------------------------------");

// 6.3.2 Inheritance
console.log("**********  6.3.2 Inheritance ********** ");
let point = {};
console.log("point.prototype", point.prototype);
console.log("point", point);

let point2 = {}; // point2 inherits object methods from Object.prototype
point2.x = 10; // and it has an own property x.

let point3 = Object.create(point2); // point3 inherits object methods from point2 &  Object.prototype
point3.y = 20; // and it has an own property y.

let point4 = Object.create(point3); // point4 inherits object methods from point3, point2 &  Object.prototype
point4.z = 30; // and it has an own property z.

let point5 = point4.toString();
console.log("point4", point4, point4.x, point4.y, point4.z);

// Inheritance

let unitcircle = { r: 1 }; // An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r
c.x = 1;
c.y = 1; // c defines two properties of its own
c.r = 3;
console.log(c, unitcircle); // unitcircle is not changed
console.log("---------------------------------------------------------");

// 6.3.3 Property Access Errors
console.log("**********  6.3.3 Property Access Errors ********** ");
let objError = {};
let surname = objError?.surname?.surname;

try {
  surname.name = "hi";
} catch (e) {
  console.log(e);
}

console.log("surname", surname);

console.log("---------------------------------------------------------");

// ##########  6.4 Deleting Properties
console.log("**********  6.4 Deleting Properties ********** ");

let deleteObj = { x: 1, y: 2 };
const ans = delete deleteObj.x;

console.log("ans", ans);
console.log("deleteObj", deleteObj);
console.log(delete 1); // nonsense, but no error

function strictDelete() {
  "use strict";

  try {
    delete Object.prototype; // TypeError in strict mode
  } catch (e) {
    console.log(e);
  }
}
strictDelete();

console.log("---------------------------------------------------------");

// ########## 6.5 Testing Properties
console.log("**********  6.5 Testing Properties ********** ");

let testing = { x: 1, y: 2, u: undefined };

console.log("x" in testing); // true
console.log("z" in testing); // false
console.log("toString" in testing); // true
console.log(testing.hasOwnProperty("x")); // true
console.log(testing.hasOwnProperty("z")); // false
console.log(testing.hasOwnProperty("toString")); // false
console.log(testing.propertyIsEnumerable("x")); // true
console.log(testing.propertyIsEnumerable("z")); // false
console.log(testing.propertyIsEnumerable("toString")); // false
console.log(Object.prototype.propertyIsEnumerable("toString")); // false
console.log(testing.u !== undefined); // false
console.log("u" in testing); // true

console.log("---------------------------------------------------------");

// ########## 6.6 Enumerating Properties
console.log("**********  6.6 Enumerating Properties ********** ");
const objEnumerable = {
  x: 1,
  y: 2,
  z: 3,
  "hello world": "string key",
  display: function () {
    console.log("display");
  },
};
console.log(objEnumerable.propertyIsEnumerable("toString")); // false
console.log(objEnumerable.propertyIsEnumerable("display")); // true
for (const key in objEnumerable) {
  console.log(key, objEnumerable[key]);
}

for (const key in objEnumerable) {
  if (!objEnumerable.hasOwnProperty(key)) {
    // skip inherited properties
    continue;
  }
}

for (const key in objEnumerable) {
  if (typeof objEnumerable[key] === "function") {
    // skip inherited methods
    continue;
  }
}

console.log("---------------------------------------------------------");

// 6.6.1 Property Enumeration Order
console.log("**********  6.6.1 Property Enumeration Order ********** ");

let objOrder = {
  b: "b",
  a: "a",
  "-2": -2,
  1.1: 1.1,
  0: "0",
  "-1": -1,
  1: 1,
};
objOrder[2] = 2;
objOrder["c"] = "c";

console.log(Object.keys(objOrder));
console.log(JSON.stringify(objOrder));

console.log("---------------------------------------------------------");

// ########## 6.7 Extending Objects
console.log("********** 6.7 Extending Objects ********** ");

const defaults = { x: 0, y: 0, z: 0 };
const newObj = { x: 10, y: 20 };
const newObj2 = { x: 10, y: 20 };
Object.assign(newObj, defaults);
console.log("newObj", newObj);

console.log(Object.assign({}, defaults, newObj2));

console.log("---------------------------------------------------------");

// ########## 6.8 Serializing Objects
console.log("********** 6.8 Serializing Objects ********** ");

const objSerialize = {
  x: 1,
  y: {
    z: [false, null, ""],
  },
  nan: NaN,
  infinity: Infinity,
  "-infinity": -Infinity,
  date: new Date(),
  regex: /abc/g,
  fuc: function () {
    console.log("function");
  },
  err: new Error("error"),
  undefined: undefined,
};
let s = JSON.stringify(objSerialize);
console.log(s);
let p = JSON.parse(s);
console.log(p);

console.log("---------------------------------------------------------");

// ########## 6.9 Object Methods
console.log("********** 6.9 Object Methods ********** ");

// ********* 6.9.1 The toString() method
console.log(Object.toString());

let objToString = {
  x: 1,
  y: 1,
  toString() {
    console.log(this.x, this.y);
  },
}; // s == "[object Object]"

console.log(objToString.toString());

// ********* 6.9.2 The toLocaleString() Method
let pointL = {
  x: 1000,
  y: 2000,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
  toLocaleString: function () {
    return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
  },
  valueOf: function () {
    return Math.hypot(this.x, this.y);
  },
  toJSON: function () {
    return this.toString();
  },
};
console.log(pointL.toString()); // => "(1000, 2000)"
console.log(pointL.toLocaleString()); // => "(1,000, 2,000)": note thousands separators

// ********* 6.9.3 The valueOf() Method

console.log(Number(pointL)); // => 2236.0679774997894: computed using valueOf()

// ********* 6.9.4 The toJSON() Method

console.log(JSON.stringify(pointL)); // => "(1000, 2000)"

const METHOD_NAME = "m";
const symboll = Symbol();
let weirdMethods = {
  "method With Spaces"(x) {
    return x + 1;
  },
  [METHOD_NAME](x) {
    return x + 2;
  },
  [symboll](x) {
    return x + 3;
  },
};

// ########## 6.10 Extended Object Literal Syntax

weirdMethods["method With Spaces"](1); // => 2
weirdMethods[METHOD_NAME](1); // => 3
weirdMethods[symboll](1); // => 4

let accessor = {
  // An ordinary data property
  dataProp: undefined,

  // An accessor property defined as a pair of functions.
  get accessorProp() {
    return this.dataProp;
  },
  set accessorProp(value) {
    this.dataProp = value;
  },
};

console.log("accessor", accessor);
accessor.accessorProp = 42;
console.log("accessor", accessor);
