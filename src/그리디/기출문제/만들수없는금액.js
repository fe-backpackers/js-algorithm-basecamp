function solution(n, coin) {
  let sort = coin.sort((a, b) => a - b);
  let target = 1;
  for (let i = 0; i < sort.length; i++) {
    if (target < sort[i]) {
      break
    } else {
      target += sort[i]
    }
  }
  return target;
}


console.log(solution(5, [3, 2, 1, 1, 9]));
