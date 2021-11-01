const sum = (a, b) => a + b;

const [[, K], A, B] = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

const answer = B.slice(0, K).reduce(sum) + A.slice(K).reduce(sum);

console.log(answer);

/*
5 3
1 2 5 4 3
5 5 6 6 5
*/
