// Add the sum of given string to check if it is prime or not.
// Input: 43
// Output: 7 -> prime.

const numberString = "43481";

const numberArray = numberString.split("").map((num) => parseInt(num));
const total = numberArray.reduce((sum, num) => sum + num, 0);
let isPrime = false;

for (let i = 2; i < total / 2; i++) {
  if (total % i == 0) {
    break;
  } else {
    isPrime = true;
  }
}

console.log(
  `Sum of the number is ${total} and the number is ${
    isPrime ? "" : "not a "
  }prime number`
);