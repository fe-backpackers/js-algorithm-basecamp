const assert = require("assert");

const insertionSort = (arr) => {
  const array = [...arr];
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] >= array[j - 1]) break;
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }
  }

  return array;
};

assert.deepStrictEqual(
  insertionSort([7, 5, 9, 0, 3, 1, 6, 2, 4, 8]),
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
);
