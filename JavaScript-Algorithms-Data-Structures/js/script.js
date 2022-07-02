// Compaing two functions
// Write a function that calculates the sum of all numbers from 1 up to and including some number n

//solution 1

function addUpTp(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(addUpTp(10));//output 55

//solution 2

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

console.log(10); //output 55
