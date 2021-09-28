// 내가 푼 방식
function solution(n, m, k) {
  let sum = 0;

  n.sort((a, b) => b - a);
  let first = n[0];
  let second = n[1];

  let count = 1;
  while (count <= m) {
    if (count % k === 0) {
      sum += first * k;
      count += k;
    } else {
      sum += second;
      count++;
    }
  }
  return sum;
}

// 책에 나온 방식 1
function solution2(n, m, k) {
  let sum = 0;

  n.sort((a, b) => b - a);
  let first = n[0];
  let second = n[1];

  while (true) {
    for (let i = 0; i < k; i++) {
      if (m === 0) break;
      sum += first;
      m -= 1;
    }
    if (m === 0) break;
    sum += second;
    m -= 1;
  }
  return sum;
}

// 책에 나온 방식 3
function solution3(n, m, k) {
  let sum = 0;

  n.sort((a, b) => b - a);
  let first = n[0];
  let second = n[1];

  let count = Math.floor(m / (k + 1)) * k;
  count += m % (k + 1);

  sum += count * first; // 가장 큰 수 더하기
  sum += (m - count) * second; // 두번째로 큰 수 더하기
  return sum;
}
console.log(solution2([3, 4, 3, 4, 3, 4], 7, 2));
