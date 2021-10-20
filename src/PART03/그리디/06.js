function solution(food_times, k) {
    let sortedArr = food_times.map((e,i) => {
        return {'time': e, 'index': i+1}
    }).sort((a,b) => {
        return a.time - b.time
    })

    for(let i = 0; i < food_times.length; i++) {
        let len = food_times.length - i,
            eatTime = (sortedArr[i].time - (i === 0 ? 0 : sortedArr[i-1].time)) * len
        if(k < eatTime) {
            return sortedArr.slice(i).sort((a,b) => a.index - b.index)[k % len].index
        }
        k -= eatTime
    }
    return -1
}

console.log(solution([3,1,2],5)) // 1