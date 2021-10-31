function solution(number, cards) {
  cards.sort((a, b) => a - b);
  let total = 0;
  for (let i = 0; i < number - 1; i++) {
    const twoSum = cards[0 + 2 * i] + cards[1 + 2 * i];
    total += twoSum;
    cards[0 + 2 * i] = 0;
    cards[1 + 2 * i] = 0;
    const newIndex = binarySearchIndex(twoSum, cards);
    cards.splice(newIndex, 0, twoSum);
  }

  return total;
}
function binarySearchIndex(target, Array) {
  let low = 0;
  let high = Array.length - 1;
  let mid = Math.ceil((low + high) / 2);
  let preMid = 0;
  while (preMid !== mid) {
    preMid = mid;
    if (target < Array[mid]) {
      high = mid - 1;
      mid = Math.ceil((high + low) / 2);
    } else {
      low = mid + 1;
      mid = Math.ceil((high + low) / 2);
    }
  }

  return mid;
}

// const cards = [10, 20, 40, 50];
// const cards = [30, 40, 50, 20, 10, 100, 60, 120];
// const cards = [120,40,100,20]
// const cards = [30, 40, 50, 60];
const cards = [
  224, 653, 518, 407, 195, 811, 821, 589, 678, 738, 530, 301, 714, 304, 588,
  669, 219, 318, 442, 866,
];
console.log(solution(20, cards));
