const input: string[] = require("fs")
  .readFileSync(0, "utf8")
  .trimEnd()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);
const coords = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

const compute = (arr: number[], step: number) => {
  let count = 1;

  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];

    if (curr - prev >= step) {
      count++;
      prev = curr;
      continue;
    }
  }

  return count;
};

let start = 1;
let end = coords[coords.length - 1];
let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  const count = compute(coords, mid);

  if (count >= K) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);

export default {};
