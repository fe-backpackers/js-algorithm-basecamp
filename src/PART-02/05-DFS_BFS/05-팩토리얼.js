// 팩토리얼을 2가지 방법으로 구현해보자.

// 1. 반복문 활용
function factorialIterative(n) {
  let result = 1;

  for (let i=1; i < n + 1; i++) {
    result *= i;
  }

  return result;
}

// 2. 재귀함수 활용
function factorialRecursive(n) {
  if (n <= 1) return 1;

  return n * factorialRecursive(n - 1);
}

console.log(factorialIterative(5)); // 120
console.log(factorialRecursive(5)); // 120
