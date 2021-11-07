const binarySearch = (
  arr: number[],
  compare: (_arr: number[], i: number) => number
) => {
  let start = 0;
  let end = a.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (compare(a, mid) === 0) {
      return mid;
    }

    if (compare(a, mid) > 0) {
      start = mid + 1;
      continue;
    }

    end = mid - 1;
  }

  return -1;
};

const input: string[] = require("fs")
  .readFileSync(0, "utf8")
  .trimEnd()
  .split("\n");

const N = Number(input[0]);
const a = input[1].split(" ").map(Number);

console.log(binarySearch(a, (arr, i) => i - arr[i]));
