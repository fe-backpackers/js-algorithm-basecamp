// 순차 탐색 소스코드 구현
function sequentialSearch(n: number, target: number, arr: number[]) {
  // 각 원소를 하나씩 확인하며
  for (let i = 0; i < n; i++) {
    // 현재의 원소가 찾고자 하는 원소와 동일한 경우
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// n(원소의 개수)과 target(찾고자 하는 문자열)을 입력받기
const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [n, target] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const result = sequentialSearch(n, arr, target);

console.log(result + 1); // 인덱스는 0부터 시작하므로 1 더하기

export default {};
