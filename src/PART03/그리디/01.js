// 오름차순 정렬 후 공포도가 가장 낮은 모험가부터 하나씩 확인한다
// '현재 그룹에 포함된 모험가의 수'가 '현재 확인하고 있는 공포도'보다 크거나 같다면 이를 그룹으로 설정

function solution(arr) {
    arr.sort((a, b) => a - b);
    let res = 0, cnt = 0;

    while (arr.length) {
        let cur = arr.pop();
        cnt++;
        if (cnt >= cur && cnt > 1) {
            cnt -= cur;
            res++;
        }
    }
    return res;
}

console.log(solution([2, 3, 1, 2, 2])); // 2
console.log(solution([2, 2, 1])); // 1