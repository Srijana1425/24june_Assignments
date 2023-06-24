function Gamewinner(n, k) {
  let winner = 0;

  for (let i = 2; i <= n; i++) {
    winner = (winner + k) % i;
  }

  return winner + 1;
}

// Example 1:
console.log("Example1 = " + Gamewinner(5, 2)); 

// Example 2:
console.log("Example2 = " + Gamewinner(6, 5)); 
