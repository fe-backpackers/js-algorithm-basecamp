// 접근방법
// 1. 현재 위치에서 현재 방향을 기준으로 왼쪽 방향(반시계 방향으로 90도 회전한 방향)부터 차례대로 갈 곳을 정한다
// 2. 캐릭터의 바로 왼쪽 방향에 아직 가보지 않은 칸이 존재한다면, 왼쪽 방향으로 회전한 다음 왼쪽으로 한 칸을 전진한다
// 왼쪽 방향에 가보지 않은 칸이 없다면, 왼쪽 방향으로 회전만 수행하고 1번 단계로 돌아간다
// 3. 만약 네 방향 모두 이미 가본 칸이거나 바다로 되어 있는 칸인 경우에는, 바라보는 방향을 유지한 채로 한 칸 뒤로 가고 1번 단계로 돌아간다
// 단, 뒤쪽 방향이 바다인 칸이라 뒤로 갈 수 없을 경우에는 움직임을 멈춘다
// 4. 1번부터 3번 단계를 반복한다

function solution(input) {
    let [SIZE, POS, ...MAP] = input.split("\n");
    SIZE = SIZE.split(" ").map((el) => Number(el));
    POS = POS.split(" ").map((el) => Number(el));
    MAP = MAP.map((el) => el.split(" ").map((el) => Number(el)));
    let answer = 1;

    const MOVE = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
    ];

    MAP[POS[0]][POS[1]] = 2;
    while (true) {
        let allVisited = true;
        for (let i = 0; i < 4; i++) {
            // 1. 왼쪽으로 회전
            POS[2] = (POS[2] + 1) % 4;
            // 가보지 않았다면 - 전진
            let nx = POS[0] + MOVE[POS[2]][0];
            let ny = POS[1] + MOVE[POS[2]][1];

            if (0 < nx && nx <= SIZE[0] && 0 < ny && ny <= SIZE[1] && MAP[nx] && MAP[nx][ny] < 1) {
                POS[0] = nx;
                POS[1] = ny;
                MAP[POS[0]][POS[1]] = 2;
                answer++;
                allVisited = false;
                break;
            }
        }
        // 네방향 다 가보거나, 바다라면
        if (allVisited) {
            // 방향유지 + 한칸 뒤로가서 다시 수행
            let nx = POS[0] - MOVE[POS[2]][0];
            let ny = POS[1] - MOVE[POS[2]][1];
            // 뒤쪽이 바다면 return;
            if (MAP[nx][ny] === 1) {
                return answer;
            }
            POS[0] = nx;
            POS[1] = ny;
        }
    }
}

let input = `4 4
1 1 0
1 1 1 1
1 0 0 1
1 1 0 0
1 1 1 1`;
console.log(solution(input));

// 시간복잡도: O(NlogN) -> for문이 while문에 중첩되어 있기 때문이다