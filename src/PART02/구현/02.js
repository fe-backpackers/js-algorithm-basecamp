// 접근방법
// 1. 시,분,초에 대한 경우의 수를 찾는다(시:24 분:60 초:60)
// 2. 시각을 1씩 증가시키면서 문자열 '3'이 하나라도 포함되어 있는지 확인한다

function solution(input) {
    // cnt를 0으로 변수선언 및 할당
    let cnt = 0;

    // 시(hour)에 대한 반복문 순회
    for (let i = 0; i <= input; i++) {
        // 분(mminute)에 대한 반복문 순회
        for (let j = 0; j < 60; j++) {
            // 초(second)에 대한 반복문 순회
            for (let k = 0; k < 60; k++) {
                // 각 시,분,초를 문자열 자료형으로 변환한뒤 3이 포함되어있으면 cnt 증가시킨다
                if (("" + i + j + k).split("").includes("3")) cnt++;
            }
        }
    }
    // cnt 리턴
    return cnt;
}

let input = 5;
console.log(solution(input));

// 시간복잡도: O(N^3) -> 삼중반복문이기 때문이다