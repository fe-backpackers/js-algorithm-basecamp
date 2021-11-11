// 접근방법
// 1. 떡의 개수(N)와 요청한 떡의 길이(M), 떡의 개별높이(riceCake)를 정한다.
// 2. 시작점, 중간점, 끝점을 정한다.
// 3. 잘랐을 때의 떡의 양을 계산하면서 떡의 양이 부족하면 더 많이 자르고, 양이 충분하면 덜자른다.
// 4. 3번 과정을 반복한다.

function solution(N, M, riceCake) {
    riceCake.sort((a, b) => a - b);

    let start = 0, end = riceCake[riceCake.length - 1], memo = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2),
        sum = riceCake.reduce((acc, cur) => {
        return acc + Math.max(cur - mid, 0);
        }, 0);

        if (sum >= M) {
            memo = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return memo;
}

  console.log(solution(4, 6, [19, 15, 10, 17])); // 15