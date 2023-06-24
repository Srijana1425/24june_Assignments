function maximumGap(nums) {
  if (nums.length < 2) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let maxGap = 0;
  for (let i = 1; i < nums.length; i++) {
    const gap = nums[i] - nums[i - 1];
    maxGap = Math.max(maxGap, gap);
  }

  return maxGap;
}

// Example 1:
console.log("Example 1 Output is :" + maximumGap([3, 6, 9, 1]));

// Example 2:
console.log("Example 2 Output is :" + maximumGap([10]));

