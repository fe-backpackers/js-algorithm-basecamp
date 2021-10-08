# min() 함수를 이용하는 답안 예시

# N, M을 공백으로 구분하여 입력받기
# N = 행의 개수
# M = 열의 개수
n, m = map(int, input('행과 열의 개수를 입력하세요').split())

result = 0

# 한 줄씩 입력받아 확인
for i in range(n):
    data = list(map(int, input().split()))
    # 현재 줄에서 '가장 작은 수' 찾기
    min_value = min(data)
    # '가장 작은 수'들 중에서 가장 큰 수 찾기
    result = max(result, min_value)

print(f'답은 {result}') # 최종 답안 출력