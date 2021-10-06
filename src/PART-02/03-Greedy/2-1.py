# 단순하게 푸는 답안 예시

# N, M, K를 공백으로 구분하여 입력받기
# n = 배열의 크기
# m = 숫자가 더해지는 횟수
# 특정한 인덱스에 해당하는 숫자는 k번을 초과하여 더해질 수 없다.
n, m, k = map(int, input('3개의 자연수를 입력하세요').split())

# N개의 수를 공백으로 구분하여 입력받기
data = list(map(int, input(f'{n}개의 자연수를 입력하세요').split()))

data.sort() # 입력받은 수들 정렬하기
first = data[n - 1] # 가장 큰 수
second = data[n - 2] # 두 번째로 큰 수

result = 0

while True:
    for i in range(k): # 가장 큰 수를 K번 더하기
        if m == 0: # m이 0이라면 반복문 탈출
            break
        result += first
        m -= 1 # 더할 때마다 1씩 빼기
    if m == 0: # m이 0이라면 반복문 탈출
        break
    result += second # 두 번째로 큰 수를 한 번 더하기
    m -= 1 # 더할 때마다 1씩 빼기

print(f'답: {result}') # 최종 답안 출력

