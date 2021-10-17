// 큐 기본구조 in JS: Array 활용 - push, shift

// Array.prototype.shift: 배열 맨 앞에 있는 값 pop
// Array.prototype.unshift: 배열 맨 앞에 값을 push

const queue = [];

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()
queue.push(5);
queue.push(2);
queue.push(3);
queue.push(7);
queue.shift(); // 5
queue.push(1);
queue.push(4);
queue.shift(); // 2

console.log(queue); // [3, 7, 1, 4]
console.log(queue.slice().reverse()); // [4, 1, 7, 3]
