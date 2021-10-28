function solution(number, cards) {
  cards.sort((a, b) => a - b);
  let sum = 0;
  cards.forEach((val, idx) => {
    if (idx === 0) {
      sum += (number - 1) * val;
    } else {
      sum += (number - idx) * val;
    }
  });

  return sum;
}

const cards = [10, 20, 40, 50];
console.log(solution(4, cards));
