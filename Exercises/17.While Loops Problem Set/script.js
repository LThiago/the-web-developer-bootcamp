console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
var counter = -10;
while (counter <= 19) {
  console.log(counter);
  counter++;
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
counter = 10;
while (counter <= 40) {
  if (counter % 2 == 0) {
    console.log(counter);
  }
  counter++;
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
counter = 300;
while (counter <= 333) {
  if (counter % 2 != 0) {
    console.log(counter);
  }
  counter++;
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
counter = 5;
while (counter <= 50) {
  if (counter % 3 == 0 && counter % 5 == 0) {
    console.log(counter);
  }
  counter++;
}
