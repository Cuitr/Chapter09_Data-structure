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
for(const [oder, indiv] of student.entries()){
  console.log(`Number ${oder + 1} is ${indiv}`);
}
*/

/*---ENHANCED OBJECT LITERALS---*/

/*---Optional chaining (?.)---*/

//let's say we want to check the data from web API if it exist:
//console.log(restaurant.openingHours.mon.open);
//=> We'll get an error because restaurant.openingHours.mon does not exist -> undefined. The open property we read from undefined will throw an error
//=> we have to check first
/*
if(restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open);
}else{
  console.log(`mon property doesn't exist`);
}
//=> mon property doesn't exist
*/
/* With optional chaining:*/
//console.log(restaurant.openingHours.mon?.open);
//=> umdefined
/*Explain code: if restaurant.openingHours.mon exist (not null, not undefined), then read the open property from there. if not, return undefined immediately.*/

//The same goes for checking multiple property:
//console.log(restaurant.openingHours?.mon?.open);

//real world example: let's loop over this array and then display to the console whether the restaurant is opened or closed
/*
const days = [`mon`, `tue`, `wen`, `thu`, `fri`, `sat`, `sun`];
for(const day of days){
  const openHour = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}day, the restaurant open at ${openHour} `);
}
*/

/*-----LOOPING OBJECTS: Object keys, values, and entries-----*/

//looping through properties name:

// for(const days of Object.keys(restaurant.openingHours)){
//   console.log(days);
// }

//Object.keys(restaurant.openingHours) is actually an array, so we can be stored in a variable

const properties = Object.keys(restaurant.openingHours);

// console.log(properties); => ["thu", "fri", "sat"]

// for(const days of properties){
//   console.log(days);
// }

//we can do that too:
// let str = `We open on ${properties.length} days: `;
// for(const days of properties){
//   str += `${days}, `;
// }
// console.log(str);

//Looping through VALUES

// const values = Object.values(restaurant.openingHours);
// console.log(values);
// for(const value of values){
//   console.log(value);
// }

//Looping through the entire object by using entries:

const entries = Object.entries(restaurant.openingHours);

// for(const obj of entries){
//   console.log(obj);
// }

//==> Destructuring the entries value
// for(const[day, {open, close}] of entries){
//   console.log(`On ${day}, we open at ${open} and close at ${close}!`);
// }


/*---Coding Challenge #2--*/

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// const goalOfPlayer = Object.values(game.scored);
// for(const[order, player] of goalOfPlayer.entries()){
//   console.log(`Goal ${order + 1}: ${player}`);
// }

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// const odd = Object.values(game.odds);
// let sum = 0;
// for(const oddValue of odd){
//   sum += oddValue;
// }
// console.log(sum/odd.length);

/*3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
*/
for(const [team, value] of Object.entries(game.odds)){
  console.log(`Odd of ${team === `x` ? `draw: ${value}` : `victory ${game[team]}: ${value}` }`);
}
/*
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/


