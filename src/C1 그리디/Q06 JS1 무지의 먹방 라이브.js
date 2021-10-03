function solution(food_times, k) {
  let foodArray = food_times
    .map((val, idx) => {
      return { idx: idx + 1, val };
    })
    .sort((a, b) => b.val - a.val);
  console.log(foodArray);
  let foodLength = foodArray.length;
  while (k > 0) {
    if (foodLength === 0) return -1;
    if (k > foodArray[foodLength - 1].val * foodLength) {
      console.log(foodArray[foodLength - 1].val * foodLength);
      k -= foodArray[foodLength - 1].val * foodLength;
      const minusVal = foodArray[foodLength - 1].val;
      foodArray = foodArray.map((food) => {
        const { idx, val } = food;
        return {
          idx,
          val: val - minusVal,
        };
      });
      foodArray.pop();
      foodLength--;
      console.log(k);
      console.log(foodArray);
      console.log(foodLength);
    } else {
      const q = k % foodLength;
      console.log(q);
      return foodArray[q].idx;
    }
  }
  // return -1
}

const food_times = [3, 1, 2];
const k = 6;
console.log(solution(food_times, k));
