// 접근방법
// 1. N을 입력받는다
// 2. N개의 정수를 입력받으면 sort함수 실행

function solution(n, arr) {
    return arr.sort((a, b) => b - a);
}

console.log(solution(3, [15, 27, 12])); // [ 27, 15, 12 ]