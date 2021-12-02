// 주어진 돈이 1260원이면 큰화폐단위 부터 거슬러 주는 과정이다.

function change() {
    let money = 1260;
    let count = 0;

    let coinType = [500, 100, 50,10];

    for(let i = 0; i<coinType.length;i++){
      count += Math.floor(money/coinType[i]);
      money %= coinType[i]
    }
     return count;
    }

    console.log(change(1260))