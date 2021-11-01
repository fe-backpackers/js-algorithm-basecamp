function heappush(q, val, comp = (a, b) => a - b) {
  const newChildIndex = q.push(val) - 1;

  (function bubbleUp(ci) {
    if (ci === 0) return;

    const pi = Math.floor((ci - 1) / 2);
    if (comp(q[pi], q[ci]) > 0) {
      [q[pi], q[ci]] = [q[ci], q[pi]];

      bubbleUp(pi);
    }
  })(newChildIndex);
}

function heappop(q, comp = (a, b) => a - b) {
  if (q.length === 1) return q.pop();

  const top = q[0];

  // 제일 마지막 요소를 root 에 넣는다
  q[0] = q.pop();

  (function trickleDown(pi) {
    const [lci, rci] = [pi * 2 + 1, pi * 2 + 2];

    if (lci >= q.length) return;

    const minci = rci >= q.length || comp(q[lci], q[rci]) < 0 ? lci : rci;

    if (comp(q[minci], q[pi]) < 0) {
      [q[minci], q[pi]] = [q[pi], q[minci]];

      trickleDown(minci);
    }
  })(0);

  return top;
}

const add = (a, b) => a + b;

const [N, ...cards] = require("fs")
  .readFileSync(0, "utf8")
  .trim()
  .split("\n")
  .map(Number);

if (N === 1) {
  console.log(0);
  process.exit(0);
}

if (N === 2) {
  const answer = cards.reduce(add);
  console.log(answer);
  process.exit(0);
}

const heapq = [];
cards.forEach((card) => heappush(heapq, card));

let answer = 0;
while (heapq.length > 1) {
  const a = heappop(heapq);
  const b = heappop(heapq);
  const sum = a + b;

  answer += sum;

  heappush(heapq, sum);
}

console.log(answer);
