const queue = [];
let head = 0;

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()
queue.push(5);
queue.push(2);
queue.push(3);
queue.push(7);
head++;
queue.push(1);
queue.push(4);
head++;

console.log(queue.slice(head)); // 먼저 들어온 순서대로 출력
console.log(queue.slice(head).reverse()); // 나중에 들어온 원소부터 출력
