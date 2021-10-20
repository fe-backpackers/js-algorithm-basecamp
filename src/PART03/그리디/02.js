// 두 수에 대하여 연산을 수행할 때, 두 수 중에서 하나라도 1 이하인 경우에는 더하고,
// 두 수가 모두 2 이상인 경우에는 곱한다

function solution(str) {
    str.split("").map(Number);
    let res = str[0]

    for(let i = 1; i < str.length; i++) {
        let num = str[i];

        if(num <= 1 || res <= 1) {
            res += num;
        } else {
            res *= num;
        }
    }
    return res;
}

console.log(solution("02984")); // 576
console.log(solution("567")); // 210