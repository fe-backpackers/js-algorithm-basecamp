// 동전에 대한 정보가 주어졌을 때, 화폐 단위를 기준으로 오름차순 정렬한다
// 1부터 차례대로 특정한 금액을 만들 수 있는지 확인한다

function solution(n, nums) {
    nums.sort((a, b) => a - b);
    let ans = 1;

    for (let num of nums) {
        if (num > ans) break;
        ans += num;
    }
    return ans;
}

console.log(solution(5, [3, 2, 1, 1, 9])); // 8
console.log(solution(3, [3, 5, 7])); // 1