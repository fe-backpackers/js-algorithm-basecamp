function solution(arr, target) {
  let table = new Array(target + 1).fill(10001);
  // target + 1 주의 그리고 바로 -1을 넣을 경우 최소값 판별시 혼돈이 올 수 있음
  table[0] = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i]; j < target + 1; j++) {
      if (table[j - arr[i]] !== 10001) {
        table[j] = Math.min(table[j], table[j - arr[i]] + 1);
      }
    }
  }

  return table[target] === 10001 ? -1 : table[target];
}

const currency = [2];
const sum = 15;
console.log(solution(currency, sum));
