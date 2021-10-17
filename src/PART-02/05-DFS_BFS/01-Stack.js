// 스택 기본구조 in JS: Array 활용
const stack = [];

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop(); // 7
stack.push(1);
stack.push(4);
stack.pop(); // 4

console.log(stack);  // [5, 2, 3, 1]
console.log(stack.slice().reverse()); // [1, 3, 2, 5] => 원본 객체 얕은 복사 후, 역순 출력
