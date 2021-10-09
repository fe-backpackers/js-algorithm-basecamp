const assert = require("assert");

function solution(len, dirs) {
  return dirs.reduce(
    (xy, dir) => {
      switch (dir) {
        case "U":
          xy[0] = Math.max(1, xy[0] - 1);
          break;
        case "D":
          xy[0] = Math.min(len, xy[0] + 1);
          break;
        case "L":
          xy[1] = Math.max(1, xy[1] - 1);
          break;
        case "R":
          xy[1] = Math.min(len, xy[1] + 1);
          break;
      }
      return xy;
    },
    [1, 1]
  );
}

assert.deepEqual(solution(5, ["R", "R", "R", "U", "D", "D"]), [3, 4]);
assert.deepEqual(solution(3, ["R", "R", "R", "U", "D", "D"]), [3, 3]);
