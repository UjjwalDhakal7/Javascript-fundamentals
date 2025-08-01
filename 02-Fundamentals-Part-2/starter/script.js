'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasdriverslicense = true;
if (hasDriversLicense) console.log('I can drive.');

const interface = 'Audio';


// defining a function
function logger() {
    console.log('My name is Ujjwal.')
}

// invoking or calling or running the function.
logger();
logger();
logger();
logger();

// a function can receive and return data

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const realJuice = fruitProcessor(5, 0);
console.log(realJuice);

const mixJuice = fruitProcessor(2, 4);
console.log(mixJuice);

// Function Declaration
function calcAge1(birthYear) {
    return 2025 - birthYear;
}

const age1 = calcAge1(1999);
console.log(age1);

// Function Expression

const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

const age2 = calcAge2(1999);
console.log(age2);

// Arrow Function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

// calculate years until retirement
const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 60 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearUntilRetirement(1999, 'Ujjwal'));

// Function calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 4));


function calcage(birthYear) {
    const age = 2025 - birthYear;
    return age
}

const yearUntilRetirement = (birthYear, firstName) => {
    const age = calcage(birthYear);
    const retirement = 60 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
    //return `${firstName} retires in ${retirement} years.`;
}

console.log(yearUntilRetirement(1999, 'Ujjwal'));
console.log(yearUntilRetirement(1960, 'Mike'));

// coding challenge 3

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(23, 34, 270);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`The winner of the match is Dolphins (${avgDolphins} vs (${avgKoalas}).`);
    } else {
        {
            console.log(`The winner of the match is Koalas (${avgKoalas} vs (${avgDolphins}).`);
        }
    }
}

checkWinner(scoreDolphins, scoreKoalas);

const friend1 = 'Michael';
const friend2 = 'Thomas';
const friend3 = 'Arthur';

const friends = ['Michael', 'Thomas', 'Arthur'];
console.log(friends);

const years = new Array(1991, 1994, 1992, 1999);
console.log(years);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'John';
console.log(friends);

// Array methods

const friends = ['Thomas', 'Arthur', 'John', 'Ada', 'Finn'];
const newLength = friends.push('Michael');    // push is a method to add an element to array
console.log(friends);
console.log(newLength);          // you can add an element and find the new length 

friends.unshift('Polly');        // Add elements to the first position of array.
console.log(friends);

const popped = friends.pop();                  // Remove the last element of the array.
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Finn'));

console.log(friends.includes('Thomas'));

// Coding challenge 4

function calcTip(billAmount) {
    return (billAmount >= 50 && billAmount <= 300) ? (billAmount * 15) / 100 : (billAmount * 20) / 100;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[bills.length - 1] + tips[tips.length - 1]];

console.log(bills, tips, totals);



// Objects

const ujjwal = {
    firstName: 'Ujjwal',
    lName: 'Dhakal',
    age: 26,
    job: 'Developer',
    friends: ['kamal', 'kaushal', 'Saugat']
};

console.log(ujjwal);

console.log(ujjwal.lName);

console.log(ujjwal['lName']);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstname, lastname, age, job, friends');

// Adding new properties to object
ujjwal.location = 'Kathmandu';
ujjwal.social = 'ujjwal.dkl';

console.log(ujjwal);

if (ujjwal[interestedIn]) {
    console.log(ujjwal[interestedIn]);
} else {
    console.log('Wrong request !');
}

// Challenge
// Jonas has 3 friends, and his best friend is Saugat.\

const ujjwal = {
    firstName: 'Ujjwal',
    lastName: 'Dhakal',
    birthYear: 1999,
    age: 26,
    job: 'Developer',
    friends: ['kamal', 'kaushal', 'Saugat'],
    hasDriversLicense: true,

    //calcAge: function (birthYear) { return 2025 - birthYear }
    calcAge: function () {
        console.log(this);
        return 2025 - this.birthYear;
    }
};

console.log(`${ujjwal.firstName} has ${ujjwal.friends.length} friends, and his best friend is ${ujjwal.friends[2]}`);

console.log(ujjwal.calcAge(1999));
//console.log(ujjwal['calcAge'](1999));

const ujjwal = {
    firstName: 'Ujjwal',
    lastName: 'Dhakal',
    birthYear: 1999,
    age: 26,
    job: 'Developer',
    friends: ['kamal', 'kaushal', 'Saugat'],
    hasDriversLicense: true,

    //calcAge: function (birthYear) { return 2025 - birthYear }
    calcAge: function () {
        console.log(this);
        return 2025 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge(1999)} years old ${this.job} and he ${this.hasDriversLicense ? 'has a' : 'doesnt have'} driving license.`;
    }
};

// Challenge
// Ujjwal is a 26 years old teacher and he has got a driving license.
console.log(ujjwal.getSummary());

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.bmi = this.mass / (this.height * this.height);
    },
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.bmi = this.mass / (this.height * this.height);
    },
};

mark.calcBMI();
john.calcBMI();

if (john.calcBMI > mark.calcBMI) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})`);
} else {
    console.log(`${mark.fullName}'s BMI (${john.bmi}) is higher than John Smith's (${mark.bmi})`);
}


console.log('Lifting weights repetition 1');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const ujjwal = [
    'Ujjwal',
    'Dhakal',
    26,
    'Developer',
    ['kamal', 'kaushal', 'Saugat']
];

const types = [];

for (let i = 0; i <= ujjwal.length - 1; i++) {
    console.log(ujjwal[i], typeof ujjwal[i]);
    // Filling an array
    // types[i] = typeof ujjwal[i];
    types.push(typeof ujjwal[i]);
}
console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2025 - years[i]);
}
console.log(ages);

// continue and break

const ujjwal = [
    'Ujjwal',
    'Dhakal',
    26,
    'Developer',
    ['kamal', 'kaushal', 'Saugat']
];

console.log(typeof ujjwal[2])


for (let i = 0; i <= ujjwal.length - 1; i++) {

    if (typeof ujjwal[i] === 'number') break;
    console.log(ujjwal[i]);
}

// looping backwards 

const ujjwal = [
    'Ujjwal',
    'Dhakal',
    26,
    'Developer',
    ['kamal', 'kaushal', 'Saugat']
];

const reverseUjjwal = [];

for (let i = 4; i >= 0; i--) {
    console.log(ujjwal[i]);
    reverseUjjwal.push(ujjwal[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`-------------Starting exercise ${exercise} -------------------`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`-----------Lifting weights repetition ${rep}-------------`);
    }
}



let rep = 1;
while (rep <= 10) {
    //console.log(`-----------Lifting weights repetition ${rep}-------------`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice)
while (dice !== 6) {
    console.log(`You rolled the ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end`);
}




const bills = [231, 435, 110, 96, 390, 180, 25, 280, 675, 300];
const tips = [];
const totals = [];

function calcTip(billAmount) {
    return (billAmount >= 50 && billAmount <= 300) ? (billAmount * 15) / 100 : (billAmount * 20) / 100;
}

for (let i = 0; i <= bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);
*/