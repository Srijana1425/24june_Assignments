function RevealthecardsinincreasingOrder(deck) {
  deck.sort((a, b) => a - b);

  const result = [];
  const queue = [...deck];

  while (queue.length) {
    result.push(queue.shift());
    if (queue.length) {
      queue.push(queue.shift());
    }
  }

  return result;
}

// Example 1:
console.log("Example1 = " + RevealthecardsinincreasingOrder([17, 13, 11, 2, 3, 5, 7]));

// Example 2:
console.log("Example2 = " + RevealthecardsinincreasingOrder([1,1000])); 
