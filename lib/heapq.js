const assert = require("assert");

const heappush = (heap, item) => {
  heap.push(item);
  let ci = heap.length - 1;

  let pi = Math.floor(ci / 2);
  while (pi > 0) {
    if (heap[ci] < heap[pi]) {
      [heap[ci], heap[pi]] = [heap[pi], heap[ci]];
    } else {
      break;
    }

    [pi, ci] = [Math.floor(pi / 2), pi];
  }
};

const heap = [null, 2, 4, 7];
heappush(heap, 1);
assert.deepEqual(heap, [null, 1, 2, 7, 4]);

const heappop = (heap) => {
  // heap 의 요소가 0개일 경우 undefined를 반환한다
  if (heap.length - 1 === 0) {
    return undefined;
  }

  // root와 마지막 요소를 swap한다.
  let li = heap.length - 1;
  [heap[1], heap[li]] = [heap[li], heap[1]];

  // swap한 root 요소를 제거하고 그 값을 저장한다
  const ret = heap.pop();

  let pi = 1;
  let lci = pi * 2;
  let rci = pi * 2 + 1;

  while (lci < heap.length) {
    if (heap[pi] > heap[lci]) {
      [heap[pi], heap[lci]] = [heap[lci], heap[pi]];
      [pi, lci, rci] = [lci, lci * 2, lci * 2 + 1];
    } else if (rci < heap.length && heap[pi] > heap[rci]) {
      [heap[pi], heap[rci]] = [heap[rci], heap[pi]];
      [pi, lci, rci] = [rci, rci * 2, rci * 2 + 1];
    } else break;
  }

  // 저장해둔 root 요소 값을 반환한다
  return ret;
};

const heap2 = [null, 1, 4, 2, 7];
heappop(heap2);
assert.deepEqual(heap2, [null, 4, 7, 2]);

/**
 * @param iter 힙으로 변환하고자 하는 iterable
 */
const heapify = (iter) => {
  const heap = [null];

  for (const el of iter) {
    heappush(heap, el);
  }

  return heap;
};

const iter = [7, 4, 2, 1];
const heap3 = heapify(iter);
assert.deepEqual(heap3, [null, 1, 2, 4, 7]);

const heaptop = (heap) => heap[1];

const heap4 = heapify([7, 4, 2, 1]);
assert.deepEqual(heaptop(heap4), 1);
