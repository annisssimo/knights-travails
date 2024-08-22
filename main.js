function knightMoves(start, end) {
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  let queue = [[start, [start]]];

  let visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [currentPosition, path] = queue.shift();
    const [x, y] = currentPosition;

    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((pos) => console.log(pos));
      return path;
    }

    for (let [dx, dy] of directions) {
      const nextX = x + dx;
      const nextY = y + dy;
      const nextPosition = [nextX, nextY];

      if (
        nextX >= 0 &&
        nextX < 8 &&
        nextY >= 0 &&
        nextY < 8 &&
        !visited.has(nextPosition.toString())
      ) {
        visited.add(nextPosition.toString());
        queue.push([nextPosition, [...path, nextPosition]]);
      }
    }
  }
}

knightMoves([2, 3], [5, 2]);
