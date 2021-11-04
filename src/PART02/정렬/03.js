// 접근방법
// 1. 배열 A와 B의 정보를 입력받는다
// 2. 배열 A의 원소를 오름차순으로 정렬한다
// 3. 배열 B의 원소를 내림차순으로 정렬한다
// 4. 두 배열의 원소를 가장 첫 번째 인덱스부터 차례대로 비교하면서 A의 원소가 B의 원소보다 작을때만 교체한다

function solution(n, k, arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => b - a);

    for (let i = 0; i < k; i++) {
        if (arr1[i] < arr2[i]) [arr1[i], arr2[i]] = [arr2[i], arr1[i]];
        else break;
    }
    return arr1.reduce((sum, cur) => sum + cur, 0);
}

console.log(solution(5, 3, [1, 2, 5, 4, 3], [5, 5, 6, 6, 5])); // 26