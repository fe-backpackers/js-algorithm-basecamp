let n = 1260;
const coins = [500, 100, 50, 10];

let count = 0;
for (let coin of coins) {
  count += Math.floor(n / coin);
  n %= coin;
}

console.log(count);