n = int(input("거스름돈은 얼마인가요?"))
count = 0

# 큰 단위의 화폐부터 차례대로 확인
coin_types = [500, 100, 50, 10]

for coin in coin_types:
    count += n // coin # 해당 화폐로 거슬러 줄 수 있는 동전의 개수 세기
    n %= coin

print(f'손님에게 거슬러 줘야 할 동전의 최소 개수는 {count}개다.')