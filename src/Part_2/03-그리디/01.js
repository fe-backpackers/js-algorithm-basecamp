// 주어진 돈이 1260원이면 큰화폐단위 부터 거슬러 주는 과정이다.

function change(){
  // 총 가진돈
  let money = 1260;
  // 횟수
  let count = 0;

  // 500원, 100원, 50원, 10원
  let coinType = [500, 100, 50, 10]

  // 배열을 순회한다.
  // 제일 큰값을 뽑는다.
  // 나눈다.
  // 나눌수없다면 다음값을 뽑아 나눈다.
  // 나눌때마다 count 에 +1씩 추가

  for(let i = 0; i <coinType.length; i++){
  // console.log(coinType[i])
    console.log(`돈 :`,money)
    console.log(`동전 :`,coinType[i])
    console.log(`횟수 :`, count)

    // count += Math.floor(money/coinType[i]);
    count += parseInt(money/coinType[i]);
     money %= coinType[i]
     // count += Math.floor(money/coinType[i]);


  }
  return count;
}

    console.log(change(1260))

    // function change(){
    //   // 총 가진돈
    //   let money = 1260;
    //   // 횟수
    //   let count = 0;

    //   // 500원, 100원, 50원, 10원
    //   let coinType = [500, 100, 50, 10]

    //   // 배열을 순회한다.
    //   // 제일 큰값을 뽑는다.
    //   // 나눈다.
    //   // 나눌수없다면 다음값을 뽑아 나눈다.
    //   // 나눌때마다 count 에 +1씩 추가

    //   for(let i = 0; i <coinType.length; i++){
    //   // console.log(coinType[i])
    //      money %= coinType[i]
    //      count += 1


    //   }
    //   return count;
    // }