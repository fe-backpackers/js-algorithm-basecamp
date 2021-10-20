// 먼저 무게마다 볼링공이 몇 개 있는지 계산한다
// 무게가 낮음->높음 순으로 볼링공을 순서대로 하나씩 확인한다

function solution(n, m, balls) {
    let weight = Array(m + 1).fill(0), cnt = 0;

    balls.forEach((val) => weight[val]++);
    weight.forEach((val, idx) => {
        n -= val;
        cnt += weight[idx] * n;
    });
    return cnt;
}

console.log(solution(5,3,[1,3,2,3,2])) // 8
console.log(solution(8,5,[1,5,4,3,2,4,5,2])) // 25