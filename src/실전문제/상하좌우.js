const solution = (n, directions) => {
  const arr = directions.split(' ');
  const position = [1, 1]


  for (let dir of directions) {
    console.log(dir)
    switch (dir) {
      case 'R':
        position[1] = Math.min(position[1] + 1, n)
        break;
      case 'L':
        position[1] = Math.max(position[1] - 1, 1)
        break;
      case 'U':
        position[0] = Math.max(position[0] - 1, 1)
        break;
      case 'D':
        position[0] = Math.min(position[0] + 1, n)
        break;
    }
  }
  return position.join(' ')
}

console.log(solution(5, 'R R R U D D'))