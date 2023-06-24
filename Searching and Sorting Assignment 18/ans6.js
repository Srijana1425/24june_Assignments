function balloons(points) {
  points.sort((a, b) => a[1] - b[1]);

  let arrows = 0;
  let prevEnd = -Infinity;

  for (const [start, end] of points) {
    if (start > prevEnd) {
      arrows++;
      prevEnd = end;
    }
  }

  return arrows;
}

// Example usage:
console.log("Example 1 Output is :" + balloons([[10, 16],[2, 8],[1, 6],[7, 12],]));

//Example 2:
console.log("Example 2 Output is :" + balloons([[1, 2],[3, 4],[5, 6],[7, 8],]));

//Example 3:
console.log("Example 3 Output is :" + balloons([[1,2],[2,3],[3,4],[4,5]]))
