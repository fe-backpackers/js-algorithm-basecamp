// 이진 탐색
function binarySearch(array, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

function solution(n, arr, m, subArr) {
  let answer = [];
  arr.sort((a, b) => a - b);
  subArr.forEach((val) => {
    let result = binarySearch(arr, val, 0, n - 1);
    if (result !== false) {
      answer.push("yes");
    } else {
      answer.push("no");
    }
  });
  return answer;
}

// set 이용
// function solution(n, arr, m, subArr) {
// 	// arr.sort((a, b) => a - b);
// 	let newArr = new Set(arr);
// 	newArr;
// 	return subArr.map((val) => {
// 		let originLength = [...newArr].length;
// 		originLength;
// 		newArr.add(val);
// 		newArr;
// 		newArr;
// 		return originLength === [...newArr].length ? "yes" : "no";
// 	});
// }

// 계수 정렬
// function solution(n, arr, m, subArr) {
// 	let checkArray = new Array(1000000).fill(0);
// 	arr.forEach((val) => {
// 		checkArray[val] = 1;
// 	});
// 	return subArr.map((val) => {
// 		return checkArray[val] === 0 ? "no" : "yes";
// 	});
// }

const N = 5;
const parts = [8, 3, 7, 9, 2];
const M = 3;
const checkParts = [5, 7, 9];
console.log(solution(N, parts, M, checkParts));
