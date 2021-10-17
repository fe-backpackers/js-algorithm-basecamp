// 접근방법
// 1. 맨 처음에 (1,1)의 위치에서 시작하며, (1,1)의 값은 항상 1이다
// 2. (1,1) 좌표에서 상, 하, 좌, 우로 탐색을 진행하면 바로 옆 노드인 (1,2) 위치의
// 노드를 방문하게 되고 새롭게 방문하는 (1,2) 노드의 값을 2로 바꾸게 된다
// 3. 마찬가지로 BFS를 계속 수행하면 결과적으로 최단 경로의 값들이 1씩 증가하는 형태로 변경된다

function solution(N, M, maze) {
    maze = maze.split('\n').map(m => {
        // 공백으로 구분해서 입력받는다
        m = m.split('').map(n => Number(n));
        return m;
    });

    // 이동할 네 방향 정의(상,하,좌,우)
    dx = [-1, 1, 0, 0];
    dy = [0, 0, -1, 1];

    // BFS 구현한다
    const queue = [];
    let x = 0, y = 0;
    queue.push([x, y]);

    // 큐가 빌 때까지 반복한다
    while (queue.length) {
        const temp = queue.shift();
        x = temp[0];
        y = temp[1];

        // 현재 위치에서 네 방향으로의 위치를 확인한다
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 미로 찾기 공간을 벗어난 경우 무시
            if (nx < 0 || ny < 0 || nx >= N || ny >= M) {
                continue;
            }

            // 벽인 경우 무시
            if (maze[nx][ny] === 0) {
                continue;
            }

            // 해당 노드를 처음 방문하는 경우에만 최단 거리를 기록한다
            if (maze[nx][ny] === 1) {
                maze[nx][ny]  = maze[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    // 가장 오른쪽 아래까지의 최단 거리를 반환한다
    return maze[N-1][M-1];
}

const maze = `110
010
011`;

console.log(solution(3, 3, maze));

// 시간복잡도 : O(NlogN) -> while문안에 for문이 중첩되어 있기 때문이다