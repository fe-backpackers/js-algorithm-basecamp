function solution(key, lock) {
  let answer = true;

  const newLock = makeLock(key, lock);
  const keyLength = key.length;
  const lockLength = lock.length;

  for (let r = 0; r < 4; r++) {
    for (let startCol = 0; startCol < keyLength + lockLength - 1; startCol++) {
      // 가로로 움직이기

      for (
        let startRow = 0;
        startRow < keyLength + lockLength - 1;
        startRow++
      ) {
        // 세로로 움직이기

        // 키와 확장된 자물쇠 더하기
        let sumLock = JSON.parse(JSON.stringify(newLock));

        for (let i = 0; i < keyLength; i++) {
          for (let j = 0; j < keyLength; j++) {
            sumLock[startRow + i][startCol + j] += key[i][j];
          }
        }
        // 열리는 지 판별
        answer = isLockOpen(key, lock, sumLock);
        if (answer === true) return true;
      }
    }
    // 키 회전
    key = rotate(key);
  }

  return false;
}

// 키 회전
function rotate(arr) {
  const arrLength = arr.length;
  let answer = [];
  for (let i = 0; i < arrLength; i++) {
    answer.push([]);
  }

  arr.map((val, idx) => {
    return val.forEach((subVal, subIdx) => {
      answer[subIdx][arrLength - idx - 1] = subVal;
    });
  });
  return answer;
}

// 자물쇠 확장 arr1 = 키, arr2 = 자물쇠
function makeLock(arr1, arr2) {
  const keyLength = arr1.length;
  const lockLength = arr2.length;
  const sumLength = lockLength + 2 * (keyLength - 1);
  let newLock = [];
  const temp = new Array(sumLength).fill(0);
  for (let i = 0; i < sumLength; i++) {
    newLock.push([...temp]);
  }
  for (let i = 0; i < lockLength; i++) {
    for (let j = 0; j < lockLength; j++) {
      newLock[keyLength - 1 + i][keyLength - 1 + j] = arr2[i][j];
    }
  }

  return newLock;
}
// 확장된 자물쇠에 키를 넣은 이후 열리는지 확인 arr1 = 키, arr2 = 자물쇠, arr3 = 확장된 자물쇠 + 키
function isLockOpen(arr1, arr2, arr3) {
  const keyLength = arr1.length;
  const lockLength = arr2.length;

  for (let i = 0; i < lockLength; i++) {
    for (let j = 0; j < lockLength; j++) {
      if (arr3[keyLength - 1 + i][keyLength - 1 + j] !== 1) {
        return false;
      }
    }
  }
  return true;
}

const key = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
// const key2 = [
// 	[0, 0, 0],
// 	[0, 0, 1],
// 	[0, 1, 0],
// ];
const lock = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

console.log(solution(key, lock));
