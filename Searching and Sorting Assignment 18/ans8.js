function pattern(nums) {
  const stack = [];
  let s3 = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < s3) {
      return true;
    }

    while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
      s3 = stack.pop();
    }

    stack.push(nums[i]);
  }

  return false;
}

// Example 1:
console.log("Example 1 Output is :" + pattern([1, 2, 3, 4]));
// Example 2:
console.log("Example 2 Output is :" + pattern([3, 1, 4, 2]));
// Example 3:
console.log("Example 3 Output is :" + pattern([-1, 3, 2, 0]));

