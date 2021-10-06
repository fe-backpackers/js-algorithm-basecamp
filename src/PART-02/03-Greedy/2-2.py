n, m, k = map(int, input('3개의 자연수를 입력하세요').split())
data = list(map(int, input(f'{n}개의 자연수를 입력하세요').split()))

data.sort()
first = data[n - 1]
second = data[n - 2]

# 가장 큰 수가 더해지는 횟수 계산
count = int(m / (k + 1)) * k
count += m % (k + 1)

result = 0
result += (count) * first # 가장 큰 수 더하기
result += (m - count) * second # 두 번째로 큰 수 더하기

print(result) # 최종 답안 출력