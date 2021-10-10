function solution(point) {
  const nLengthHalf = point.length / 2;
  nLengthHalf;
  const left = point
    .slice(0, nLengthHalf)
    .split("")
    .reduce((acc, val) => Number(acc) + Number(val));
  const right = point
    .slice(nLengthHalf)
    .split("")
    .reduce((acc, val) => Number(acc) + Number(val));
  left;
  right;
  return left === right ? "Lucky" : "Ready";
}

const point = "7755";
console.log(solution(point));
