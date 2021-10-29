// 접근방법
// 1. N을 입력받는다
// 2. N개의 정수를 입력받으면 sort함수 실행하여 점수를 기준으로 정렬한다

function solution(n, arr) {
    let list = [];
    arr.sort((a, b) => a[1] - b[1]);
    arr.forEach((el) => {
        list.push(el[0]);
    });
    return list;
}

console.log(solution(2, [["홍길동", 95], ["이순신", 77]])); // [ '이순신', '홍길동' ]