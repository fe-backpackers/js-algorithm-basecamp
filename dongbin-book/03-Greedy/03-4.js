/**
 * @name 1이 될 때까지
 * @link 동빈북 3-4
 * @date 2021-10-01
 * @author sunmon
 */

const readConsole = require("../../lib/utils").readConsole;

const generator = function* () {
  let counter = 0;
  const input = yield;
  let [n, k] = input.split(" ").map((i) => Number.parseInt(i));
  while (n >= k) {
    const target = Number.parseInt(n / k) * k;
    counter += n - target;
    n = target;
    n /= k;
    counter += 1;
  }
  counter += n - 1;
  console.log(counter);
};

readConsole(generator);
