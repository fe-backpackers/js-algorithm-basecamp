// 모든 도로의 거리는 1 이라는 조건으로 너비 우선 탐색을 이용한다

function solution(N, M, K, X, city) {
    const graph = Array(N).fill([]);
    city.split('\n').forEach(c => {
        const path = c.split(' ');
        const i = Number(path[0]) - 1;
        const j = Number(path[1]) - 1;
        graph[i] = [...graph[i], j];
    });

    const queue = [];
    queue.push(X-1);

    const distance = Array(N).fill(-1);
    distance[X-1] = 0;

    while (queue.length !== 0) {
        const i = queue.shift();

        for (let j of graph[i]) {
            if (distance[j] === -1) {
            distance[j] = distance[i] + 1;
            queue.push(j);
            }
        }
    }

    const answer = [];
    for (let i = 0; i < distance.length; i++) {
        if (distance[i] === K) {
            answer.push(i + 1);
        }
    }

    if (answer.length === 0) {
        return -1;
    }

    answer.sort((a, b) => a - b);
    for (let a of answer) {
        console.log(a);
    }
    return parseInt(...answer);
}

console.log(solution(4, 4, 2, 1, '1 2\n1 3\n2 3\n2 4')); // 4
console.log(solution(4, 3, 2, 1, '1 2\n1 3\n1 4')); // -1
console.log(solution(4, 4, 1, 1, '1 2\n1 3\n2 3\n2 4')); // 2