2021.10.15 
### BFS & DFS 개념 학습 ✨ (동빈책 + 구글링)

#### Stack in JS
-Last-In-First-Out (LIFO)
-real-world example is a stack of plates
-a linear data structure (arranged in a sequential order,operations can ahppen at 1 end)

##### fundamental operations
1.push—This operation is responsible for inserting or pushing a new element to the stack.
2.pop—This operation is responsible for removing the most recent element from the stack.


```
class Stack {
 constructor() {
   this.stack = [];
 }
 push(item) {
   this.stack.push(item);
 }
 pop() {
   this.stack.pop();
 }
}
```

#### Queue
-works based on the principle of first in first out (FIFO)
-a linear data structure(operations can ahppen at 1 end, beginning of the queue)

##### fundamental operations
1.enqueue—inserting or pushing a new element to the queue.
2.dequeue—removing the oldest element from the queue.

```
let stack = [];
const enqueue = (item) => queue.push(item);
const dequeue = () => queue.shift();
```

#### Recursion


#### Referenecs

Stack and Queue in JavaScript 
https://www.telerik.com/blogs/stack-queue-javascript

큐(블로그)
https://velog.io/@longroadhome/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-JS%EB%A1%9C-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-.%ED%81%90-Queue

Recursion
https://www.javascripttutorial.net/javascript-recursive-function/
