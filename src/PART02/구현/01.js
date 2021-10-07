// 접근방법
// 1. (1,1)을 출발점으로 정한다
// 2. L,R,U,D에 따른 이동 방향을 정한다
// 3. 이동후의 좌표를 구한다
// 4. 공간을 벗어나는 경우 무시하도록 한다
// 5. 띄어쓰기 한칸으로 합해서 반환한다

function solution(input) {
    // 공간의 크기를 n이라고 하고 계획서 내용을 arr로 변수선언하여 배열안에 넣은뒤 줄바꿈으로 나눈다.
    [n, arr] = input.split("\n");
    // plans는 변수arr을 띄어쓰기 한칸으로 나눈것이다.
    plans = arr.split(" ");

    // 출발점은 x좌표1이고 y좌표1이다.
    let pos = [1, 1];

    // 오른쪽으로 한칸가면 y좌표+1, 왼쪽으로 한칸가면 y좌표-1, 위쪽으로 한칸가면 x좌표-1, 아래쪽으로 한칸가면 y좌표+1
    let move = { R: [0, 1], L: [0, -1], U: [-1, 0], D: [1, 0] };
    // plans라는 배열을 순회하면서 좌표를 구함
    plans.forEach((plan) => {
        let x = pos[0] + move[plan][0];
        let y = pos[1] + move[plan][1];
        // 각각 x좌표와 y좌표별로 이동공간을 벗어나는경우를 예외처리
        if (x > 0 && x < n) pos[0] = x;
        if (y > 0 && y < n) pos[1] = y;
    });
    // pos 배열의 결과값을 띄어쓰기로 합쳐서 리턴
    return pos.join(" ");
}

let input = `5
R R R U D D`;
console.log(solution(input));

// 시간복잡도: O(N)
