
// n : 거스름돈

// 내가 푼 방법

function solution(n){
    let count = 0;
    const units = [500,100,50,10];
    let index = 0;
    while(n > 0 && index < 4){
        if(units[index] > n){
            index++;
        }
        n-=units[index];
        count++;
    }
    return count;
}

// 책에 나와있는 답안

function solution2(n){
    let count = 0;
    [500,100,50,10].forEach((coin)=>{
        count += (Math.floor(n/coin));
        n %= coin;
    });
    return count;

}

console.log(solution2(1260));