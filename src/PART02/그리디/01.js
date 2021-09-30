// 접근방법
// 1. 가장 큰 화폐 단위부터 돈을 거슬러준다
// 1-1. 거스름돈의 단위는 500원, 100원, 50원, 10원이다
// 2. 500원 단위부터 시작하여 각각 단위별로 남는돈이 없을때까지 거슬러준다
// 3. 2번 단계를 끝날때까지 반복한다

function solution() {
    let n = 1260, cnt = 0, moneyTypes = [500, 100, 50, 10];

    for(let coin of moneyTypes) {
        cnt += parseInt(n/coin);
        n %= coin
    }
    return cnt;
}


console.log(solution(1260))

// 시간복잡도: O(N)