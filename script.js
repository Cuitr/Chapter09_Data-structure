'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
  oder: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  }
  
};

/*---Destructuring Object--*/
//we use cruly braces to destructure object, just like how we create them
// const {name, categories, openingHours} = restaurant;
//console.log(name, categories, openingHours);

//set variables name difference from the properties name
/*
const {name: restaurantName, 
  categories: type, 
  openingHours: hours} = restaurant;
  console.log(restaurantName, hours, type);
  // mutating variables
  let a = 100;
  let b = 200;
  const obj = {a: 12, b: 15, c: 20};
  ({a, b} = obj); // "=" follows a block of statements, so if we intended to write a destructing assignment, we might need to warp the whole assignment in parentheses "()"
  console.log(a, b);
*/
  /*---nested object destructuring---*/
/*
  //const{fri} = openingHours;
  //console.log(fri);
  
  const {fri: {open, close}} = openingHours;
  console.log(open, close);


//console.log(restaurant.oder(2, 1));
//const [first, second] = restaurant.categories;
// console.log(first, second); // Italian Pizzeria
//const [first, ,third] = restaurant.categories;
// console.log(first,third); //Italian Vegetarian

//switch elements:

/* 
let [first, ,third] = restaurant.categories;
[first, third] = [third, first];
console.log(first, third);
*/

// --Destructuring nested array--
/*
const[starter, main] = restaurant.oder(1,1);
console.log(starter, main);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/
/*--- SPREAD OPTERATOR ---*/
const ingredients = [
  prompt(`Let\'s make pasta with ingredient 1`),
  prompt(`ingredient 2`),
  prompt(`ingredient 3`)
];
restaurant.orderPasta(...ingredients);
