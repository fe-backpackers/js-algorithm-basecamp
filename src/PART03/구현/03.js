function solution(s) {
    let answer = s.length;

    for(let len=1; len <= s.length/2; len++) {
        let str = "", idx = 0, tmp = s.substring(0,len), cnt = 1;

        for(idx = len; idx <= s.length; idx+=len) {
            if(tmp === s.substring(idx, idx+len)) {
                cnt++;
            } else {
                if(cnt===1) str+=tmp;
                else str+=cnt+tmp;
                cnt=1;
                tmp=s.substring(idx,idx+len);
            }
        }

        if(cnt===1) str+=tmp;
        else str+=cnt+tmp;

        answer = Math.min(answer, str.length);
    }
    return answer;
}

console.log(solution("aabbaccc")) // 7
console.log(solution("ababcdcdababcdcd")) // 9
console.log(solution("abcabcdede")) // 8
console.log(solution("abcabcabcabcdededededede")) // 14
console.log(solution("xababcdcdababcdcd")) // 17