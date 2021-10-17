// 재귀함수(종료조건 포함) 예제 in JS

function recursiveFunction(i) {
  if (i === 100) return; // 종료 조건
  console.log(`${i}번째 재귀 함수 호출`);
  recursiveFunction(i + 1);
  console.log(`${i}번째 재귀 함수 호출 종료`);
}

recursiveFunction(0);
