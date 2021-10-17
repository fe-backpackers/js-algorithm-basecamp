// 접근방법
// 1. 특정한 지점의 주변 상, 하, 좌, 우를 살펴본 뒤에 주변 지점 중에서 값이 '0'이면서
// 아직 방문하지 않은 지점이 있다면 해당 지점을 방문한다
// 2. 방문한 지점에서 다시 상, 하, 좌, 우를 살펴보면서 방문을 다시 진행하면, 연결된
// 모든 지점을 방문할 수 있다
// 3. 1~2번 과정을 모든 노드에 반복하며 방문하지 않은 지점의 수를 센다

function solution(N, M, ices) {
    // 2차원 리스트의 맵 정보를 입력받는다
    const graph = [];
    ices.split('\n').forEach(ice => {
        // 공백으로 구분하여 입력받음
        ice = ice.split('').map(i => Number(i));
        graph.push(ice);
    });

    // DFS로 특정한 노드를 방문한 뒤에 연결된 모든 노드들도 방문한다
    function dfs(x, y) {
        // 주어진 범위를 벗어날 경우 바로 종료
        if (x <= -1 || x >= N || y <= -1 || y >= M) {
            return false;
        }

        // 현재 노드를 아직 방문하지 않았다면
        if (graph[x][y] === 0) {
            // 해당 노드 방문 처리
            graph[x][y] = 1;
            // 상,하,좌,우의 위치도 모두 재귀적으로 호출한다
            dfs(x - 1, y);
            dfs(x, y - 1);
            dfs(x + 1, y);
            dfs(x, y + 1);
            return true;
        }

        return false;
    }

    // 모든 노드에 대해 음료수를 채운다
    let answer = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            // 현재 위치에서 DFS를 수행한다
            if (dfs(i, j)) {
                answer++;
            }
        }
    }
    // answer 리턴
    return answer;
}

const ices = `001
010
101`;

console.log(solution(3, 3, ices))

// 시간복잡도 : O(N^2) -> 이중for문이기 때문이다