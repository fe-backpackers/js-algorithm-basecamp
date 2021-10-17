// const { default: Queue } = require("../../lib/queue");
const Queue = require("../../lib/queue");

const graph = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];
const n = 5,
  m = 6;
//구현 접근법
/*
 * 큐의 구현부분에서 undefined가 되어 실패함 - 큐구현 수정 필요
 *
 * */

const solution = (n, m, graph) => {
  const dx = [-1, 1, 1, 0];
  const dy = [0, 0, -1, 1];
  //최소 거리 구하기 bfs

  //큐 구현
  const q = new Queue();

  q.enqueue([0, 0]);

  // while(q),
  while (q.length) {
    const [x, y] = q.dequeue();
    let nx, ny;
    for (let i = 0; i < 4; i++) {
      nx = x + dx[i];
      ny = y + dy[i];
      if (nx <= -1 || nx >= n || ny <= -1 || ny >= m) continue;
      if (graph[nx][ny] === 0) continue;

      if (graph[nx][ny] === 1) {
        //괴물이 없다.
        graph[nx][ny] = graph[x][y] + 1; //graph좌표에 다른 숫자가 들어와도 됨 어차피 1이 아니기만 하면 되니깐
        q.enqueue([nx, ny]);
      }
    }

    //마지막 출구 자리에 이미 몇번째 인지 남겨져 있다
  }
  return graph[n - 1][m - 1];
};

console.log(solution(n, m, graph));
