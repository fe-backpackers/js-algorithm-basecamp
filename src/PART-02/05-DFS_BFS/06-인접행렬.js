// 인접행렬 예제 구현 in JS

// 인접행렬 특징
// 장점: 연결관계를 찾는 속도가 빠름.
// 단점: 모든 노드의 관계(i와 i 포함)를 포함해서 메모리 낭비.

const inf = Infinity;

const graph = [[0, 7, 5], [7, 0, inf], [5, inf, 0]];

console.log(graph);
