function recursiveFunction(i) {
  if (i === 100) {
    return;
  }
  console.log(`${i}번째 재귀 함수에서 ${i + 1}번째 재귀 함수를 호출합니다.`);
  recursiveFunction(i + 1);
  console.log(`${i}번째 재귀 함수를 종료합니다.`);
}

recursiveFunction(1);
