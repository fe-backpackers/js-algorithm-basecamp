# 2중 반복문 구조를 이용하는 답안 예시

n, m = map(int, input('행과 열의 개수를 입력하세요').split())

result = 0

for i in range(n):
    data = list(map(int, input().split()))
    # 현재 줄에서 '가장 작은 수' 찾기
    min_value = 10001 # 최솟값과 비교할 대상을 임의의 큰 수로 지정한 것
    for a in data:
        min_value = min(min_value, a)
        print(f'min_value: {min_value}')
    # '가장 작은 수'들 중에서 가장 큰 수 찾기
    result = max(result, min_value)
    print(f'result: {result}')

print(f'답은 {result}') # 최종 답안 출력