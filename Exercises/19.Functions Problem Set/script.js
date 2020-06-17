function isEven(number) {
  return number % 2 == 0;
}
function factorial(number) {
  if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
function kebabToSnake(string) {
  return string.replace(/-/g, "_");
}

console.log("isEven() test:");
console.log("   4 is even? " + isEven(4));
console.log("   21 is even? " + isEven(21));
console.log("   68 is even? " + isEven(68));
console.log("   333 is even? " + isEven(333));

console.log("factorial() test:");
console.log("   factorial of 5: " + factorial(5));
console.log("   factorial of 2: " + factorial(2));
console.log("   factorial of 10: " + factorial(10));
console.log("   factorial of 0: " + factorial(0));

console.log("kebabToSnake() test:");
console.log("   hello-world - " + kebabToSnake("hello-world"));
console.log("   dogs-are-awesome - " + kebabToSnake("dogs-are-awesome"));
console.log("   blah - " + kebabToSnake("blah"));
