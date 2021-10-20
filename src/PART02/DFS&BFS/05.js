// 팩토리얼 반복문 ver.
function factorial_iterative(n) {
    let result = 1;

    for(let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

// 팩토리얼 재귀함수 ver.
function factoral_recursive(n) {
    if(n <= 1) {
        return 1;
    }
    return n * factoral_recursive(n - 1);
}

console.log("반복적으로 구현 : ", factorial_iterative(5));
console.log("재귀적으로 구현 : ", factoral_recursive(5));