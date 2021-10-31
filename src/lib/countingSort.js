const countingSort = (arr) => {
  const count = Array(Math.max(...arr)).fill(0);
  for (let i in count) {
    i = Number(i);
    count[arr[i]] += 1;
  }
  let res = [];
  for (let i = 0; i < count.length; i++) {
    for (let j = count[i]; j >= 0; j--) {
      res = [...res, i];
    }
  }
  return res;
};

countingSort([7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2]);
