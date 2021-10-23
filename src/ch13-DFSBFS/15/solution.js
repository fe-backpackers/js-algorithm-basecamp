const input = require("fs")
  .readFileSync(require("path").resolve(__dirname, `input.txt`))
  .toString()
  .split("\n");
const Queue = require("../../lib/queue");
const [n, m, k, x] = input[0].split(" ").map(Number);
const graph = input.slice(1, n + 1).map((v) => v.split(" ").map(Number));
const adjacencyList = Array.from({ length: n + 1 }, () => []);

const solution = (n, m, k, x, graph) => {
  const isVisited = Array(n + 1).fill(false);
  const minDistances = Array.from({ length: n + 1 }, () => []);
  const q = new Queue();
  let cur;
  let cnt = 1;

  for (let [key, value] of graph) {
    adjacencyList[key].push(value);
  }
  q.enqueue(x);
  while (cnt <= k) {
    //bfs
    cur = q.dequeue();
    //find adjacencies from the current node
    adjacencyList[cur].forEach((v) => {
      if (!isVisited[v]) {
        minDistances[cnt].push(v);
        q.enqueue(v);
        isVisited[v] = true;
      }
    });
    cnt++;
  }

  return minDistances[k].length
    ? minDistances[k].forEach((v) => console.log(v))
    : -1;
};

console.log(solution(n, m, k, x, graph));
