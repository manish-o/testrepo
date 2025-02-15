const timesToRepeat = 10;
const character = "m";

let word = ""; // start with an empty string
for (let i = 0; i < timesToRepeat; i++) {
  word = word + character;
}

console.log(word);