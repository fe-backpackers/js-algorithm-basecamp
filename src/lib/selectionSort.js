const assert = require("assert");

const selectionSort = (arr) => {
  let minIndex = Number.MAX_SAFE_INTEGER;
  let copiedArr = [...arr];
  for (let i = 0; i < copiedArr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < copiedArr.length; j++) {
      if (copiedArr[minIndex] > copiedArr[j]) {
        minIndex = j;
      }
    }
    [copiedArr[minIndex], copiedArr[i]] = [
      copiedArr[i],
      copiedArr[minIndex],
    ];
  }
  return copiedArr;
};

assert.deepStrictEqual(
  selectionSort([7, 5, 9, 0, 3, 1, 6, 2, 4, 8]),
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
);
