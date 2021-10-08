const input = require("fs").readFileSync(0, "utf8").trim();
let [n, k] = input.split(' ').map(Number);

let count = 0
while (n >= k) {
  if (n % k === 0) {
    n = n / k;
    count += 1;
  } else {
    let temp = n % k;
    count += temp;
    n -= temp;
  }
}

count += (n - 1);

console.log(count);