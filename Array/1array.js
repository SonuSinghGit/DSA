// write all natural number from 1 to n

function sumofNatural(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    // sum += i;
    sum = sum +i;
  }
  return sum;
}
const result = sumofNatural(10);
console.log(result);
