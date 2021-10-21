// 모든 알파벳을 오름차순으로 정렬한다
// 알파벳을 오름차순으로 정렬 후 모든 숫자를 더한 값을 이어서 출력 후 오름차순으로 정렬하여 출력한다

function solution(n) {
    let str = n.split(""), arr = [], sum = 0;

    str.forEach((s) => {
        if (s.match(/[a-zA-Z]/gi)) arr.push(s);
        else sum += Number(s);
    });

    return arr.sort().join("") + sum;
}

console.log(solution("K1KA5CB7")) // "ABCKK13"
console.log(solution("AJKDLSI412K4JSJ9D")) // "ADDIJJJKKLSS20"