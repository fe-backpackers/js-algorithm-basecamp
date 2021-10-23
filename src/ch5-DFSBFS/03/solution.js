const graph = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 1, 0],
];
const n = 3;

/**
 * 구멍이 뚫린 부분은 0, 칸막이가 존재하는 부분은 1로 표시된 N*M 얼음틀에서 총 아이스크림의 개수 구하기
 * 구멍이 뚫려있는 부분끼리 상, 하 ,좌, 우 로 붙어있는 경우 서로 연결되어 있는 것으로 간주한다.
 * 
 * @param {Number} n
 * @param {Array} graph
 * @returns {Number} 틀 모양이 주어졌을 때 생성되는 총 아이스크림의 개수
 * 
 * 접근법 : 얼음틀에서 상하좌우 붙어있는 0 들을 시작 노드점 부터 추적해 나간다.(DFS) -> 더이상 추적할 노드가 없다면 아이스크림이 하나 생성
 * 
 
*/
const solution = (n, graph) => {
  const dfs = (x, y) => {
    //x,y의 범위가 주어진 range에 벗어나면 종료
    if (x <= -1 || x >= n || y <= -1 || y >= n) {
      return false;
    }

    //현재 노드가 방문한적이 있는지 확인
    if (graph[x][y] === 0) {
      //방문한 적이 없을 때 방문 기록
      graph[x][y] = 1;

      //4방향 모두 길찾기
      dfs(x - 1, y); //북
      dfs(x, y - 1); //서
      dfs(x + 1, y); //남                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            , y)//남
      dfs(x, y + 1); //동
      return true;
    }
  };

  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j) === true) {
        result += 1;
      }
    }
  }

  return result;
};

console.log(solution(n, graph));
