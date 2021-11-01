const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0; j--) {
    // 한 칸씩 왼쪽으로 이동
    if (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    } else {
      // 자기보다 작은 데이터를 만나면 그 위치에서 멈춤
      break;
    }
  }
}

console.log(arr);
