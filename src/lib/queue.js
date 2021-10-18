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
    return Object.keys(this.#queue).length;
  }

  icrSort() {
    if (!this.length()) return this.#queue;
    return Array.isArray(this.#queue[1])
      ? [...Object.entries(this.#queue)].sort((a, b) => a[1][0] - b[1][0])
      : [...Object.entries(this.#queue)].sort((a, b) => a[1] - b[1]);
  }
  descSort() {}
}

module.exports = Queue;
