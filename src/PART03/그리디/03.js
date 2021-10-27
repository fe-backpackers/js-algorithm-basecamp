// 전부 0으로 바꾸는 경우와 전부 1로 바꾸는 경우 중에서 더 적은 횟수를 가지는 경우를 계산한다

function solution(str) {
    let cnt0 = 0, cnt1 = 0;

    if(str[0] === '1') {
        cnt0++;
    } else {
        cnt1++;
    }

    for(let i = 0; i < str.length - 1; i++) {
        if(str[i] !== str[i + 1]) {
            if(str[i + 1] === '1') {
                cnt0++;
            } else {
                cnt1++;
            }
        }
    }
    return Math.min(cnt0, cnt1);
}

console.log(solution('0001100')) // 1