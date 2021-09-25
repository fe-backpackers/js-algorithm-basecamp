const range = (start, end) =>
  Array.from({ length: end - start }, (_, i) => start + i);

const factorialIterative = (n) =>
  range(1, n + 1).reduce((acc, curr) => acc * curr, 1);

const factorialRecursive = (n) => (n <= 1 ? 1 : n * factorialRecursive(n - 1));

console.log("반복적으로 구현: ", factorialIterative(5));
console.log("재귀적으로 구현: ", factorialRecursive(5));
