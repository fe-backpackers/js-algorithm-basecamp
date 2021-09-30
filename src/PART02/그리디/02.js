// 접근방법
// 1. 수를 입력받아 배열에 담는다
// 2. 입력값 중에서 가장 큰 수와 두번째로 큰 수만 저장한다
// 3. 가장 큰 수를 K번 더하고 두번째로 큰 수를 한번 더하는 연산을 반복한다

function solution(n,m,k) {
    let sum = 0;

    n.sort((a,b) => b-a);
    let first = n[0], second = n[1];

    let cnt = parseInt(m/(k+1)) * k;
    cnt += m % (k+1);

    sum += cnt * first;
    sum += (m-cnt) * second;
    return sum;
}

console.log(solution([2,4,5,4,6],8,3))

// 시간복잡도: O(N)