const assert = require("assert");

const range = (start, end, step = 1) => {
  const result = [];

  for (let i = start; i < end; i += step) {
    result.push(i);
  }

  return result;
};

const solve = (N) => {
  let count = 0;

  for (const hour of range(0, N + 1)) {
    for (const min of range(0, 60)) {
      for (const sec of range(0, 60)) {
        if (`${hour}${min}${sec}`.includes("3")) {
          count += 1;
        }
      }
    }
  }

  return count;
};

const cases = [{ params: [5], expected: 11_475 }];

cases.forEach(({ params, expected }) => {
  assert.deepEqual(solve(...params), expected);
});
