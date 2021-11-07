// 이진 탐색 소스코드 구현(반복문)
function binarySearch(
  arr: number[],
  target: number,
  start: number,
  end: number
): number {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    // 찾은 경우 중간점 인덱스 반환
    if (arr[mid] === target) {
      return mid;
    }

    // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
    if (arr[mid] > target) {
      end = mid - 1;
    }
    // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
    else {
      start = mid + 1;
    }
  }

  return -1;
}

// n(원소의 개수)과 target(찾고자 하는 문자열)을 입력받기
const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [n, target] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const result = binarySearch(arr, target, 0, n - 1);

if (result === -1) {
  console.log("원소가 존재하지 않습니다.");
} else {
  console.log(result + 1);
}

export default {};
