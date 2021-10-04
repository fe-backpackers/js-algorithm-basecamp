// 접근방법
// 1. N이 K의 배수가 될 때까지 1씩 뺀다
// 2. N을 K로 나눈다
// 3. 1번과 2번과정을 반복할 수 없을때까지 반복한다

function solution(n,k) {
    let result = 0;
    let target = 0;

    while(true) {
        target = (n / k) * k;
        result += (n - target);
        n = target;
        if(n < k) {
            break;
        }
        result += 1;
        n /= k;
    }

    result += (n - 1);
    return result;
}

console.log(solution(25,5))

// 시간복잡도: O(N)