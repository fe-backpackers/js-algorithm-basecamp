const [, ...lines] = require("fs").readFileSync(0, "utf8").trim().split("\n");

const answer = lines
  .map((line) => line.split(" "))
  .map(([name, score]) => [name, Number(score)])
  .sort((a, b) => a[1] - b[1])
  .map(([name]) => name);

console.log(answer.join(" "));

/*
2
홍길동 95
이순신 77
 */
