// Declaring a variable
let js = 'amazing';

// using the console to view the output
console.log("Jonas");

let fname = "Matilda  ";
console.log(fname);

//datatypes in javaScript
//string
let country = 'Nepal';
let continent = 'Asia';

//Number
let population = 3645353;

console.log(country, continent, population);

// finding the datatypes of a variable
console.log(typeof true);
console.log(typeof country);
console.log(typeof population);

//boolean
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

//undefined
let cost;
console.log(cost);
console.log(typeof cost);

cost = 1991;
console.log(typeof cost);

console.log(typeof null);  // shows 'object' which is a bug in Js, not removed for legacy reasons

const birthYear = 1999;
birthYear = 2000;


var job = 'programmer';
job = 'teacher';


const currentYear = 2025;
const ageUjjwal = currentYear - 1999;
const ageSarah = currentYear - 2018;
console.log(ageUjjwal, ageSarah);

console.log(ageUjjwal / 2, ageSarah * 3, 2 ** 3);
// ** means x times power of y, in this case 2 times 3

const fName = 'Ujjwal';
const lastName = 'Dhakal';
console.log(fName + ' ' + lastName);

// Assignment operators

let x = 10 + 5; //15
x += 10;       // x = x + 10
x *= 4;        // x = x * 4 = 100
x++;           //x = x + 1 = 100
x--;           //x = x - 1 = 99
console.log(x);


//comparision oerators

console.log(ageSarah > ageUjjwal);
console.log(ageSarah >= 18);

const isFullage = ageSarah >= 18;
console.log(currentYear - 1999 > currentYear - 2018);

let z, y;
z = y = 25 - 10 - 5; // In this case maths operation is performed first, then followed bu assignment operator which is done right to left.
console.log(x, y);   // Hence the value of y is 10 which is then assigned to x.

const averageAge = (ageUjjwal + ageSarah) / 2
console.log(ageUjjwal, ageSarah, averageAge);



// Coding Challenge 1

// store Mark's and John's height in variables.

const massMark = 78
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark ** 2);
const BMIJOhn = massJohn / (heightJohn ** 2);
const markHigherBMI = BMIMark > BMIJOhn;
console.log(BMIMark, BMIJOhn, markHigherBMI);

console.log("Mark's BMI is higher than the BMI of John's!")


const firsttName = 'Ujjwal';
const job = 'Developer';
const yearofBirth = 1999;
const year = 2025;
const ujjwal = "I'm " + firsttName + ', a ' + (year - yearofBirth) + ' years old ' + job + '!';
console.log(ujjwal);

//template literals

const ujjwalNew = `I'm ${firsttName}, a ${year - yearofBirth} years old ${job} !`;
console.log(ujjwalNew);

// adding multiline strings
console.log(`String with
multiple
lines`);


const age = 23;

if (age >= 18) {
    console.log('Sarah can start her driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYears = 1991;
let century;
if (birthYears <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins are the winners ${scoreDolphins} points in average.`)
} else {
    console.log(`Koalas are the winners with ${scoreKoalas} points in average.`)
}

// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(typeof (String(23)));

// Type Coercion

console.log('I am ' + 23 + ' years old.');

let n = '1' + 1;
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean('Jonas'));
console.log(Boolean(undefined));
console.log(Boolean(''));

const money = 10;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job.");
}

let height;
if (height) {
    console.log('Yay, Height is defined.');
} else {
    console.log('Height is undefined.');
}


if (age === 18) {
    console.log('YOu just became an adult. (strict)')
}

if (age == 18) {
    console.log('YOu just became an adult. (loose)')
}

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool ! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number.')
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23)
    console.log('Why not 23?');

// Boolean Logic

const hasDriversLicennse = true;
const hasGoodVision = false;

console.log(hasDriversLicennse && hasGoodVision);
console.log(hasDriversLicennse || hasGoodVision);
console.log(!hasDriversLicennse);

const shouldSarahDrive = hasDriversLicennse && hasGoodVision;

if (shouldSarahDrive) {
    console.log('Sarah can drive');
} else {
    console.log('Sarah should not drive.');
}

const isTired = true;

console.log(hasDriversLicennse || hasGoodVision || isTired);
console.log(hasDriversLicennse && hasGoodVision && isTired);

let a1 = 96;
let a2 = 108;
let a3 = 89;

let b1 = 88;
let b2 = 91;
let b3 = 110;

let minScore = 100;

let average1 = (a1 + a2 + a3) / 3;
let average2 = (b1 + b2 + b3) / 3;

if (average1 === average2) {
    console.log('There was a Draw.');
} else if (average1 > average2) {
    console.log('Team Dolphins is the winner.');
} else {
    console.log('Team Koalas is the winner.');
}

const day = 'Sunday';

switch (day) {
    case 'Monday':
        console.log('Plan course structure.');
        break;
    case 'Tuesday':
        console.log('Preparing theory videos.');
        break;
    case 'Wednesday':
        console.log('Plan course structure.');
        break;
    case 'Thursday':
        console.log('Preparing theory videos.');
        break;
    case 'Friday':
        console.log('Plan course structure.');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Have fun, chill, party out.');
        break;
    default:
        console.log('NOt a valid day !!');
}

const dayofaWeek = prompt('Enter a day of a week');
if (dayofaWeek === 'Monday') {
    console.log('Plan course structure.');
} else if (dayofaWeek === 'Tuesday') {
    console.log('Preparing theory videos.');
} else if (dayofaWeek === 'Tuesday') {
    console.log('Preparing theory videos.');
} else if (dayofaWeek === 'Wednesday') {
    console.log('Preparing theory videos.');
} else if (dayofaWeek === 'Thursday') {
    console.log('Preparing theory videos.');
} else if (dayofaWeek === 'Friday') {
    console.log('Preparing theory videos.');
} else if (dayofaWeek === 'Sunday' || dayofaWeek === 'Saturday') {
    console.log('Have fun, chill, party out.');
} else {
    console.log('Not a valid day !!');
}

const yourage = 13;

yourage >= 18 ? console.log('You can buy a drink !!') : console.log('You cannot buy a drink !!');

// An operator is an expression hence it can create a value.

const drink = yourage >= 18 ? 'Wine' : 'Water';
console.log(drink);


const billAmount = 275;
const tip = (billAmount >= 50 && billAmount <= 300) ? (billAmount * 15) / 100 : (billAmount * 20) / 100;
console.log(`The bill was ${billAmount}, the tip was ${tip}, and the total value was ${billAmount + tip}.`);