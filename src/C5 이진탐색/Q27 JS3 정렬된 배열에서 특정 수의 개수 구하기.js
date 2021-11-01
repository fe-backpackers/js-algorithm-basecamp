function solution(n, target, array) {
  const left = binarySearchLeft(target, array);
  if (left === -1) return -1;
  const right = binarySearchRight(target, array);

  return right - left;
}

function binarySearchLeft(target, dataArray) {
  if (dataArray[0] === target) return 0;

  let low = 0;
  let high = dataArray.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let guess = dataArray[mid];
    let leftGuess = dataArray[mid - 1];
    if (guess === target && leftGuess !== target) {
      return mid;
    } else if (guess >= target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

function binarySearchRight(target, dataArray) {
  if (dataArray[dataArray.length - 1] === target) return dataArray.length - 1;
  let low = 0;
  let high = dataArray.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    let guess = dataArray[mid];
    let rightGuess = dataArray[mid + 1];
    if (guess === target && rightGuess !== target) {
      return mid;
    } else if (guess <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const N = 7;
const target = 2;
const X = [1, 2, 2, 2, 2, 2, 2, 3, 5];
console.log(solution(N, target, X));
