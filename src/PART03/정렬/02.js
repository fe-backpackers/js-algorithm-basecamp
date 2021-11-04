function solution(n, arr) {
    return arr.sort((a, b) => a - b)[Math.floor((n-1)/2)]
}

const n = 4, arr = [5,1,7,9]

console.log(solution(n,arr)); // 5