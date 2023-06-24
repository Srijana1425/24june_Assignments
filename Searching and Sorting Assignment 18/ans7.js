function longestincreasingsubsequence(nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// Example 1:
console.log("Example 1 Output is :" + longestincreasingsubsequence([10, 9, 2, 5, 3, 7, 101, 18]));

// Example 2:
console.log("Example 2 Output is :" + longestincreasingsubsequence([0, 1, 0, 3, 2, 3]));

// Example 3:
console.log("Example 3 Output is :" + longestincreasingsubsequence([7, 7, 7, 7, 7, 7, 7]));

