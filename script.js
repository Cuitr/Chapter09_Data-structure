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
  },
  orderPizza: function(mainIngredient, ...orther){
      console.log(mainIngredient);
      console.log(orther);
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
// const ingredients = [
//   prompt(`Let\'s make pasta with ingredient 1`),
//   prompt(`ingredient 2`),
//   prompt(`ingredient 3`)
// ];
// restaurant.orderPasta(...ingredients);

/*----REST PATTERN & PARAMETER----*/

/*-Array-*/
// const [pizza, , risotto, ...otherMenus] = [...restaurant.starterMenu, restaurant.mainMenu];
// console.log(pizza, risotto, otherMenus);

/*object*/

// const {thu, ...weekDays} = restaurant.openingHours;
// console.log(weekDays);

/*function*/

// const add = function(...num){
//   let sum = 0;
//   for(let i = 0; i < num.length; i++){
//     sum += num[i];
//   }
//   console.log(sum);
// };
// add(1,3,7,9);

// restaurant.orderPizza(`orange`, `butter`, `sperm`, `mushroom`, `peanut`);

/*---SHORT CIRCUITING (&& AND ||)---*/

/*-|| operator (OR)-*/

//chcking if a property exists

//const guest = restaurant.numGuest ? console.log(restaurant.Guest) : console.log(1); // 1
//explain: if there is a property called numGuest on restaurant object (that mean restaurant.numGuest has truethy value), display that value on the console,. If not, display 1 which is default value we set.

//Use short-circuiting:

// const guest = restaurant.numGuest || 1;
// console.log(guest); // 1

/*Exp: say we are getting some data from a remote services/database about our online store customers.
Some of them are VIPs and some are not. Those are not VIPs do not have a vip property on the object.*/

// const customer1 = {
//   name: `Vinh`,
//   age: 29,
//   vip: true,
// };
// const customer2 = {
//   name: `Phuong`,
//   age: 27,
// };
// const isVip = customer => {
//   const vip = customer.vip || false;
//   return `${customer.name} is ${vip ? `a VIP` : `not a VIP`}`;
// };
// console.log(isVip(customer1)); //Vinh is a VIP
// console.log(isVip(customer2));//Phuong is not a VIP

/*-Operator && (AND)-*/

// console.log(3 && 1 && 2 && `Vinh`); // Vinh
// console.log(3 && 1 && null && `Vinh`);// null



/*------CODE CHALLLENGE 1------*/

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

};
/*
//1. Create one player array for each team (variables 'players1' and 'players2')

const[player1, player2] = game.players;
console.log(player1, player2);

//2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

const[gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22 players) (merge 2 array)
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

//4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...player1, `Thiago`, `Coutinho`, `Perisic`];
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {team1, x : draw, team2} = game.odds;
console.log(team1, draw, team2);

//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
//and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function(...players){
        console.log(`${players.length} goals were scored`);
};
printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimmich`);
printGoals(...game.scored);


//7. The team with the lower odd is more likely to win. 
//Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
console.log(team2 && team1);
*/

/*---LOOPING ARRAYS: The for - of loop ----*/
/*
const student = [`Vinh`, `Phuong`, `Chan`, `Cuong`, `Hau`];
for(const indiv of student.entries()){
  console.log(`Number ${indiv[0] + 1} is ${indiv[1]}`);
}
*/
