// 접근방법
// 1. 뽑고자 하는 카드가 포함되어 있는 행을 선택한다
// 2. 그 선택된 행에 포함된 카드들 중 최소값의 카드를 뽑는다
// 3. 2번을 반복
// 4. 선택된 행들의 카드중에서 가장 큰수가 속해있는 카드를 뽑는다

function solution(card) {
    let result = 0;

    for(let i = 0; i < card.length; i++) {
        const min = Math.min(...card[i])
        result = Math.max(min, result);
    }
    return result;
}

const card = [[3,1,2],[4,1,4],[2,2,2]]

console.log(solution(card))

// 시간복잡도: O(N)