'use strict';

// scope of variable in javascript

function calcAge(birthyear) {
  // function scope: declared within a function
  const age = 2025 - birthyear;
  function printAge() {
    let output = `${firstName} is ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;

      // Creating new variables with same name as outer scope's variables
      const firstName = 'Steven';
      // Javascript tries to look for variables in current scope and not lookup variables

      // Redefining outer scope's variables
      output = 'New Output';

      // block scope(since ES6): declared within a block
      const str = `Oh ! and you're a millenial, ${firstName}`;
      console.log(str);

      // function are also block scope in 'Strict Mode'
      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
    // console.log(add(2, 3));
  }
  printAge();
  return age;
}

// Global scope: outside of function or block
const firstName = 'Ujjwal';
// calcAge(1991);

// Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ujjwal';
let job = 'Developer';
const year = 1999;

// Functions
console.log(addDecl(3, 4));
// console.log(addExpr(3, 4));
// console.log(addArrow(3, 4));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted !!');
}

// declaration with var creates a property on window object but let or const don't
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

// The THIS keyword

// THIS in global scope is simply a window object
console.log(this);

// THIS in simple function call is undefined (in 'strict mode')
const findAge = function (birthyear) {
  console.log(2025 - birthyear);
  console.log(this);
};

findAge(1999);

// THIS in arrow function absorbs this from surrounding function (Lexical THIS)
const findAgeArrow = birthyear => {
  console.log(2025 - birthyear);
  console.log(this);
};

findAgeArrow(1990);

// THIS in a method is an object that is calling the method
// In this case, ujjwal is the object calling the method calcAge
const ujjwal = {
  year: 1999,
  test: 'test',
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
};
ujjwal.calcAge();

const matilda = {
  year: 2007,
};

// Method borrowing: borrow method from one object to another
matilda.calcAge = ujjwal.calcAge;
matilda.calcAge();

const ujjwald = {
  fName: 'ujjwal',
  year: 1999,
  test: 'test',
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => console.log(this);
    console.log(this.year >= 1981 && this.year <= 1996);
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.fName}`),
};

ujjwald.greet();
ujjwald.calcAge();

// arguments keyword
const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpression(2, 5);
// You can add numerous arguments in a function. Also, arrow function doesn't get this keyword.
addExpression(4, 7, 8, 9);

// Object References

const sumina = {
  firstName: 'Sumina',
  lastName: 'Dhakal',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedSumina = marryPerson(sumina, 'Dahal');

// const marriedSumina = sumina;
// marriedSumina.lastName = 'Dahal';
console.log('Before:', sumina);
console.log('After:', marriedSumina);

const sumina2 = {
  firstName: 'Sumina',
  lastName: 'Dhakal',
  age: 27,
  family: ['Samantha', 'Mrunal'],
};

// Shallow Copy
const suminaCopy = { ...sumina2 };
suminaCopy.lastName = 'Dahal';

// suminaCopy.family.push('John');
// suminaCopy.family.push('Jessica');

// console.log('Before:', sumina);
// console.log('After:', suminaCopy);

// Deep Copy/clone
const suminaClone = structuredClone(sumina); // structuredClone() help create a deep clone directly

suminaCopy.family.push('John');
suminaCopy.family.push('Jessica');

console.log('original:', sumina);
console.log('clone:', suminaCopy);
