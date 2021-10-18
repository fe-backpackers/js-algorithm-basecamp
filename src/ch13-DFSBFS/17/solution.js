const input = require("fs")
  .readFileSync(require("path").resolve(__dirname, `input.txt`))
  .toString()
  .split("\n");
const Queue = require("../../lib/queue");
const [n, k] = input[0].split(" ").map(Number);
const graph = input.slice(1, n + 1).map((v) => v.split(" ").map(Number));
const [S, X, Y] = input[n + 1].split(" ").map(Number);

const solution = (n, k, graph, S, X, Y) => {
  const dx = [-1, 0, 1, 0]; //북동남서
  const dy = [0, 1, 0, -1];
  let q = new Queue();

  //queueing
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] !== 0) {
        q.enqueue([graph[i][j], i, j, 0]);
      }
    }
  }

  //sort
  q.icrSort();

  let nx = 0,
    ny = 0;

  let ele;
  while ((ele = q.dequeue())) {
    const [, i, j, sec] = ele;
    if (sec > S) break; //observed 요소가 주어진 시간을 지난거면 break

    //북동남서 계산
    for (let x in dx) {
      x = Number(x);
      nx = dx[x] + i;
      ny = dy[x] + j;

      //boundary check
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

      //0이 아니라면 continue
      if (graph[nx][ny] !== 0) continue;
      //0이다.
      if (graph[nx][ny] === 0) {
        //update graph
        graph[nx][ny] = graph[i][j];
        q.enqueue([graph[i][j], i, j, sec + 1]);
      }
    }
  }
  return graph[X - 1][Y - 1];
};

console.log(solution(n, k, graph, S, X, Y));
