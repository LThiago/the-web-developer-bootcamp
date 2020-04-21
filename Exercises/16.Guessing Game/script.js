number = 7;
guess = Number(prompt("Guess a number!"));

if (guess === number) {
  alert("You guessed it!");
} else if (guess < number) {
  alert("Too low. Try again");
} else if (guess > number) {
  alert("Too high. Try again");
}
