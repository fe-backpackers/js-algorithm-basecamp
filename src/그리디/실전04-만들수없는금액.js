function solution(coins) {
  coins.sort((a, b) => a - b);
  let target = 1;
  for (let coin of coins) {
    if (target < coin) break;
    target += coin;
  }
  return target;
}

[[3, 2, 1, 1, 9]].forEach((ex) => {
  console.log(solution(ex));
});

// node 실전04-만들수없는금액
