export function heappush<T>(q: T[], val: T, comp: (a: T, b: T) => number) {
  let ci = q.push(val) - 1;
  while (ci > 0) {
    const pi = Math.floor((ci - 1) / 2);
    if (comp(q[pi], q[ci]) <= 0) break;

    [q[pi], q[ci]] = [q[ci], q[pi]];
    ci = pi;
  }
}

export function heappop<T>(q: T[], comp: (a: T, b: T) => number) {
  if (q.length <= 1) return q.pop();

  const top = q[0];

  q[0] = q.pop()!;

  let pi = 0;
  while (true) {
    const [lci, rci] = [pi * 2 + 1, pi * 2 + 2];

    if (lci >= q.length) break;

    const minci = rci >= q.length || comp(q[lci], q[rci]) < 0 ? lci : rci;

    if (comp(q[minci], q[pi]) >= 0) break;

    [q[minci], q[pi]] = [q[pi], q[minci]];

    pi = minci;
  }

  return top;
}
