// const getData = () => {
//   console.log("Data is back");
// };

// setTimeout(getData, 0);

// console.log("How bout me?");

function game(tries, randomNumber, guess) {
  console.log("NUMBER: ", randomNumber, "TRIES", tries, "GUESS", guess);
  // write your code here
  if (tries > 0) {
    if (randomNumber == guess) console.log("WINNER");
    else
      guess > randomNumber ? console.log("TOO HIGH") : console.log("TOO LOW");
  } else console.log(`YOU LOSE! THE NUMBER WAS:${randomNumber}`);
}
