const compute = (a, b, sign) => {
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return parseInt(a / b, 10) || 0;
  }
};

const permutation = (n, r, arr) => {
  const answer = [];
  const visited = Array(arr.length).fill(false);

  const recursive = (level, result = []) => {
    if (level === r) {
      answer.push([...result]);

      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;

      result[level] = arr[i];
      visited[i] = true;
      recursive(level + 1, result);
      // result.pop();
      visited[i] = false;
    }
  };

  recursive(0);

  return answer;
};

const input = require("fs").readFileSync(0, "utf8").split("\n");

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const [plus, minus, multi, division] = input[2].split(" ").map(Number);

const signs = (
  "+".repeat(plus) +
  "-".repeat(minus) +
  "*".repeat(multi) +
  "/".repeat(division)
).split("");

const cases = permutation(N - 1, N - 1, signs);

let [max, min] = [-Infinity, Infinity];

for (const c of cases) {
  let i = 0;
  const result = nums.reduce((a, b) => compute(a, b, c[i++]));

  max = Math.max(max, result);
  min = Math.min(min, result);
}

console.log(max);
console.log(min);
