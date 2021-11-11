// 접근방법
// 1. 매장 내 N개의 부품을 번호를 기준으로 정렬한다
// 2. M개의 찾고자 하는 부품이 각각 매장에 존재하는지 확인한다
// 3. 손님이 요청한 부품 번호 순서대로 확인해 부품이 있으면 yes 없으면 no를 리턴한다


function solution(N, items, M, buy) {
    const answer = [];
    items.sort((a, b) => a - b);

    for (let x of buy) {
        answer.push(binarySearch(items, x));
    }
    return answer;

    function binarySearch(arr, target, start = 0, end = arr.length - 1) {
        if (start > end) {
            return "NO";
        }
        const mid = parseInt((start + end) / 2);

        if (arr[mid] === target) {
            return "YES";
        } else if (target > arr[mid]) {
            return binarySearch(arr, target, mid + 1, end);
        } else {
            return binarySearch(arr, target, start, mid - 1);
        }
    }
}

console.log(solution(5, [8, 3, 7, 9, 2], 3, [5, 7, 9])); // [ 'NO', 'YES', 'YES' ]