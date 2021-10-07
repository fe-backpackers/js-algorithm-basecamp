// 접근방법
// 1. 8x8 공간을 만든다
// 2. 행과 열 위치를 각각 표현한다
// 3. 나이트의 이동 경로를 배열로 만든다
// 4. 해당 배열을 순회하면서 주어진 공간 안에서만 움직일 수 있게한다


function solution(input) {
    // 8x8 좌표 평면상에서 행과 열 위치표현
    let alphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
    // pos는 input값을 문자열로 붙인것을 변수선언 및 할당
    let pos = input.split("");
    // pos = 알파벳에서 키값, value값을 숫자화한것
    pos = [alphabet[pos[0]], Number(pos[1])];
    // cnt는 0으로 변수선언 및 할당
    let cnt = 0;

    // 나이트의 이동 경로를 변수선언 및 할당
    // 수평으로 두칸 이동한 뒤에 수직으로 한칸 이동하거나
    // 수직으로 두칸 이동한 뒤에 수평으로 한칸 이동한경우
    const steps = [
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
    ];

    // steps 배열을 순회
    steps.forEach((step) => {
        // nx는 수평으로 움직일 경우, ny는 수직으로 움직일 경우
        let nx = pos[0] + step[0], ny = pos[1] + step[1];

        // 8x8 공간에서만 이동할 수 있도록 처리
        if (nx > 0 && nx <= 8 && ny > 0 && ny <= 8) {
            // cnt 1씩증가
            cnt++;
        }
    });
    // cnt 리턴한다
    return cnt;
}

let input = "a1";
console.log(solution(input));

// 시간복잡도: O(N)