// 입력값을 각 자릿수로 구분한다
// 각 자릿수를 2로 나누고 왼쪽부분의 자릿수합을 더하고, 오른쪽부분의 자릿수합을 뺀다
// 왼쪽부분과 오른쪽부분의 자릿수 합이 동일한지 검사하여 동일하면 'LUCKY'를, 아니면 'READY'를 반환

function solution(n) {
    let len = n.length, halfLen = n.length/2, sum = 0;

    for(let i = 0; i < halfLen; i++) {
        sum += Number(n[i]);
    }

    for(let j = halfLen; j < len; j++) {
        sum -= Number(n[j]);
    }

    if(sum === 0) {
        return "LUCKY"
    } else {
        return "READY"
    }
}

console.log(solution("123402")) // "LUCKY"
console.log(solution("7755")) // "READY"