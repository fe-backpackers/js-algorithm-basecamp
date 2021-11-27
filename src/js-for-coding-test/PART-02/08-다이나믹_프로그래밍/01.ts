// 피보나치 함수(Fibonacci Function)을 재귀 함수로 구현
const fibo = (x: number): number =>
  x === 2 || x === 1 ? 1 : fibo(x - 1) + fibo(x - 2);

console.log(fibo(4)); // 3

export {};
