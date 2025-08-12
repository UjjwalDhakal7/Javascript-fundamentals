'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 2,
    mainIndex = 1,
    time = '20:00',
    address = 'home',
  }) {
    console.log(
      ` Order Received ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// function call to order a delivery
restaurant.orderDelivery({
  time: '22:30',
  address: 'Dhumbarahi',
  mainIndex: 2,
  starterIndex: 2,
});

// function call to order a pizza
restaurant.orderPizza('mushrooms', 'onion', 'coriander');

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[2];
const c = arr[2];

// SPREAD operators
const newArr = [1, 5, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, string, maps, sets, NOT objects
const str = 'Ujjwal';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
  // prompt("Let's make Pasta ! Ingredient 1?"),
  // prompt("Let's make Pasta ! Ingredient 2?"),
  // prompt("Let's make Pasta ! Ingredient 3?"),
];
console.log(ingredients);

// old way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// using spread operator
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  ...restaurant,
  founder: 'Ujjwal',
  location: 'Kathmandu',
  year: 1992,
};
console.log(newRestaurant);

// value change in copied object only
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristaurante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Destructuring array
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// Selecting the third element by skipping the second
const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// swapping values using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// destructuring objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(name, openingHours, categories);

// setting default values in object destructuring
const { newmenu = [], starterMenu: starters = [] } = restaurant;
console.log(newmenu, starters);

// mutating variables

let o = 111;
let l = 999;
const obj = { o: 23, l: 7, s: 45 };
({ o, l } = obj);
console.log(o, l);

// nested objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Rest pattern and parameter

// Destructuring

// SPREAD, because on right side of =
const spreadOperator = [2, 3, ...[4, 5, 6]];

// REST, because on left side of =
const [u, v, ...others] = [1, 2, 3, 4, 5];
// rest pattern packs the others into an array
console.log(u, v, others);

const [Pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherFood);

// objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(4, 5, 6, 7);
add(1, 2, 3, 4, 5, 6, 7, 8);

const d = [23, 5, 7];
add(...d);
