console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");
for (var index = -10; index <= 19; index++) {
  console.log(index);
}
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");
for (var index = 10; index <= 40; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");
for (let index = 301; index <= 333; index++) {
  if (index % 2 != 0) {
    console.log(index);
  }
}

console.log("PRINT ALL NUMBERS -5 AND 3 BETWEEN 5 AND 50");
for (let index = 5; index <= 50; index++) {
  if (index % 5 == 0 && index % 3 == 0) {
    console.log(index);
  }
}
