function solution(p) {
    if(p==='') return p;
        let sum = 0, u = "", v = "", right = true;

        for(let i = 0; i < p.length; i++) {
            if(p[i] === '('){
                sum += 1;
                u += p[i];
            } else {
                sum -= 1;
                u += p[i];
                if(sum<0) right=false;
            }
            if(sum === 0){
                v = p.substring(i+1);
                break;
            }
        }
        if(v === "" && right){
            return p;
        }
        if(right){
            return u+= solution(v);
        } else {
            let str = "(" + solution(v) + ")";
            u = u.substring(1,u.length-1);
            for(let i = 0; i < u.length; i++) {
                if(u[i] === '('){
                    str += ")";
                } else str += "(";
            }
            return str;
        }
}

console.log(solution("(()())()")) // '(()())()'
console.log(solution(")(")) // '()'
console.log(solution("()))((()")) // '()(())()'