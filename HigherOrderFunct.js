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

// Iterate over fruits below
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
const secretMessage = animals.map((animal) => animal[0]);

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
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