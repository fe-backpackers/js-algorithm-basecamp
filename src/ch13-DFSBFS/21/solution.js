function updateGraph(graph, avg, copiedGraph) {
  while (graph.length) {
    const [x, y] = graph.pop();
    copiedGraph[x][y] = avg;
  }
  return copiedGraph;
}

//main solution
const solution2 = (graph, n, l, r) => {
  const shouldBorderOpen = (a, b) =>
    l <= Math.abs(a - b) && Math.abs(a - b) <= r;

  const isNotInRange = (x, y) =>
    x < 0 || x >= n || y < 0 || y >= n;

  let cnt = 0; //총인구이동 횟수
  const dx = [-1, 0, 1, 0]; //북동남서 확인
  const dy = [0, 1, 0, -1];
  let copiedGraph = JSON.parse(JSON.stringify(graph));

  while (true) {
    function dfs(x, y, nx, ny) {
      if (isNotInRange(nx, ny)) return;
      if (nx !== x || ny !== y) {
        if (
          !shouldBorderOpen(
            copiedGraph[x][y],
            copiedGraph[nx][ny]
          )
        )
          return;
      }

      if (unionGraph[nx][ny] === true) return;
      //유니온이 된 국가는 true로
      unionGraph[nx][ny] = true;
      tempUnion.push([nx, ny]);
      sum += copiedGraph[nx][ny];
      unionCnt += 1;
      x = nx;
      y = ny;

      dfs(x, y, dx[0] + Number(x), dy[0] + Number(y)); //북
      dfs(x, y, dx[1] + Number(x), dy[1] + Number(y)); //동
      dfs(x, y, dx[2] + Number(x), dy[2] + Number(y)); //남
      dfs(x, y, dx[3] + Number(x), dy[3] + Number(y)); //서

      //연합 국가가 없을 경우 (출발국가 자신인 경우)
      if (tempUnion.length === 1) {
        tempUnion = [];
        return false;
      }

      return true;
    }

    let sum = 0; // 연합 국가들의 인구수 합
    let unionCnt = 0; // 연합 국가수
    let flag = true; //flag -> 더이상 방문할 국가가 없어, 새로 인구이동을 시작하게 하는 flag, !flag- 더 찾아볼 연합국가들이 남았다.
    let unionGraph = Array.from({ length: n }, () =>
      Array(n).fill(false)
    ); //연합국가의 방문기록을 위한 graph
    let tempUnion = []; // 매 dfs마다 얻어진 연합국가 좌표

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        unionCnt = 0;
        sum = 0;
        if (!unionGraph[i][j]) {
          if (dfs(i, j, i, j)) {
            //연합국가들이 있다면, 평균 인구 수를 구한후 update한다.
            flag = false;
            let avg = parseInt(sum / unionCnt);
            copiedGraph = updateGraph(
              tempUnion,
              avg,
              copiedGraph
            );
            tempUnion = [];
          }
        }
      }
    }
    if (flag) {
      break;
    } else {
      cnt += 1;
    }
  }
  return cnt;
};

console.log(
  solution2(
    [
      [10, 100, 20, 90],
      [80, 100, 60, 70],
      [70, 20, 30, 40],
      [50, 20, 100, 10],
    ],
    4,
    10,
    50
  )
); //3

// console.log(
//     solution2(
//     [
//       [10, 15, 20],
//       [20, 30, 25],
//       [40, 22,10],

//     ],
//     3,
//     5,
//     10
//   )
// ) //2
