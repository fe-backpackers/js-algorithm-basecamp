function solution(food_times, k) {
  let sortedArr = food_times.map((e, idx) => {
    return { 'time': e, 'idx': idx + 1 }
  }).sort((a, b) => a.time - b.time);

  for (let i = 0; i < sortedArr.length; i++) {
    let len = sortedArr.length - i
    let spendTime = (sortedArr[i].time - (i === 0 ? 0 : sortedArr[i - 1].time)) * len;
    if (spendTime > k) return sortedArr.slice(i).sort((a, b) => a.idx - b.idx)[k % len].idx
    k -= spendTime
  }
  return -1;
}

console.log(solution([3, 1, 2], 5))