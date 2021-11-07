function solution(coins) {
  coins.sort((a, b) => a - b);
  let target = 1;

  for (let i of coins) {
    console.log(i);
    console.log(target);
    if (target < i) {
      // return target
      break;
    }
    target += i;
  }
  return target;
}

const coins = [1, 2, 5];
console.log(solution(coins));
