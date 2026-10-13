// Problem
// Given an integer n, print numbers from 1 to n.
// But:
// If number is divisible by 3 → "Fizz"
// If number is divisible by 5 → "Buzz"
// If divisible by both 3 and 5 → "FizzBuzz"
// Otherwise → print the number

function fizzBuzzProblem(low, high) {
  for (let i = low; i <= high; i++) {
    if (i % 3 === 0) {
      console.log("fizz");
    }
    if (i % 5 === 0) {
      console.log("buzz");
    }
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    }
    console.log(i);
  }
}
fizzBuzzProblem(1, 15);
