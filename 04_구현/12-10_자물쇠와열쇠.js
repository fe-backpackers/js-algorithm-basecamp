const assert = require("assert");

const pad = (size, v = 0) => Array(size).fill(v);
function solution(key, lock) {
  if (key.length < lock.length) {
    const gap = lock.length - key.length;
    key = [
      ...key.map((row) => [...row, ...pad(gap)]),
      ...pad(gap, pad(lock.length)),
    ];
  }
  const m = key.length;
  for (let rN = 0; rN < 4; rN++) {
    if (rN > 0)
      key = key[0].map((_, index) => key.map((row) => row[index]).reverse());
    for (let vN = -m + 1; vN <= m - 1; vN++) {
      const vKey = key.map((row) =>
        vN >= 0
          ? [...pad(vN), ...row.slice(0, m - vN)]
          : [...row.slice(-m - vN), ...pad(Math.abs(vN))]
      );
      for (let hN = -m + 1; hN <= m - 1; hN++) {
        const hKey =
          hN >= 0
            ? [...vKey.slice(-m + hN), ...pad(hN, pad(m))]
            : [...pad(Math.abs(hN), pad(m)), ...vKey.slice(0, m + hN)];
        if (lock.every((row, i) => row.every((n, j) => n + hKey[i][j] === 1)))
          return true;
      }
    }
  }
  return false;
}

assert.ok(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
);
