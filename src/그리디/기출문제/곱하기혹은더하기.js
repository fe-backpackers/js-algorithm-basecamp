function solution(s) {
  let arr = s.split('').map(e => Number(e));
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0 || result === 0) {
      result += arr[i];
    } else {
      result *= arr[i]
    }
  }
  return result
}

console.log(solution('02984'));
console.log(solution('567'));