// Functions as data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log("Something has gone very wrong :( ");
    }
  }
};

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);

//   ITERATORS
//  .forEach() method
const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over the fruits array to log I want to eat a plus the name of each fruit to 
// the console. For example, I want to eat a mango
fruits.forEach((produceItem) => console.log(`I want to eat a ${produceItem}`));

// output:
// I want to eat a mango
// I want to eat a papaya
// I want to eat a pineapple
// I want to eat a apple

// .map() Method
const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below
// Use .map() to create a new array that contains the first character of each 
// string in the animals array. Save the new array to a const variable named secretMessage.
const secretMessage = animals.map((animal) => animal[0]);

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
// Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a 
// variable declared with const called smallNumbers.
const smallNumbers = bigNumbers.map((num) => num / 100);
console.log(smallNumbers);

// .filter() Method
const words = ["chair", "music", "pillow", "brick", "pen", "door"];

const shortWords = words.filter((word) => {
  return word.length < 6;
});
console.log(shortWords);

// output: (5) ['chair', 'music', 'brick', 'pen', 'door']

// Call .filter() on randomNumbers below
// Call the .filter() method on randomNumbers to return values that 
// are less than 250. Save them to a new array called smallNumbers, declared with const

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(function (number) {
  if (number < 250) {
    return true;
  }
});

// refactored
const smallNumbers = randomNumbers.filter((number) => {
  return number < 250;
});
console.log(smallNumbers);
// output: (4) [200, 3.14, 7, 13]

// Invoke .filter() on the favoriteWords array to return elements that have more 
// than 7 characters. Save the returned array to a const variable named longFavoriteWords
const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
  });
  console.log(longFavoriteWords)
//   output: [ 'nostalgia', 'hyperbole', 'esoteric' ]

// .findIndex()
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// Invoke .findIndex() on the animals array to find the index of the element that has the value 
// 'elephant' and save the returned value to a const variable named foundAnimal.

const foundAnimal = animals.findIndex(animalIndex => {
    return animalIndex === 'elephant';
});
console.log(foundAnimal);
// output: 7

// Call .findIndex() on the animals array and return the index of the first element that starts with 's'.
// Assign the returned value to a const variable named startsWithS.
const startsWithS = animals.findIndex(animalIndex => {
    return animalIndex[0] === 's'
});
console.log(startsWithS);
// output: 3

// .reduce() Method
// Provide .reduce with an argument of a callback function. The callback function has two parameters. 
// The first parameter is accumulator and the second parameter is currentValue.
// Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers.
// Add a second argument of 10 to .reduce().
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator,currentValue) => {
  console.log(accumulator);
  console.log(currentValue);
  return accumulator + currentValue
},10) ;
console.log(newSum)

// More iteerator
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => { 
  return word.length > 5;
} ));

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
