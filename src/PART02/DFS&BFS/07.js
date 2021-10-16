// Row가 3개인 2차원 리스트를 만들어 graph라는 변수에 값으로 할당했다.
// Array.from() : 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만든다.(MDN 발췌)
const graph = Array.from(Array(3), () => new Array())

// 노드 0에 연결된 노드 정보를 저장한다.
graph[0].push([1, 7]);
graph[0].push([2, 5]);

// 노드 1에 연결된 노드 정보를 저장한다.
graph[1].push([0, 7]);

// 노드 2에 연결된 노드 정보를 저장한다.
graph[2].push([0, 5]);

console.log(graph); // [[ [ 1, 7 ], [ 2, 5 ] ], [ [ 0, 7 ] ], [ [ 0, 5 ] ]]