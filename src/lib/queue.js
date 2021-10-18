class Queue {
  #queue = {};

  constructor() {
    this.tail = 0;
    this.head = 0;
  }
  // queue의 마지막 자리
  enqueue(ele) {
    this.#queue[this.tail++] = ele;
  }

  dequeue() {
    if (this.tail === this.head) return null;
    const element = this.#queue[this.head];
    delete this.#queue[this.head++];
    return element;
  }
  length() {
    return this.#queue.length;
  }
}
module.exports = Queue;
