function containsDuplicate(nums) {
  const numSet = new Set();

  for (const num of nums) {
    if (numSet.has(num)) {
      return true;
    }

    numSet.add(num);
  }

  return false;
}

// Example 1:
console.log("Example 1 Output is :" + containsDuplicate([1, 2, 3, 1]));

// Example 2:
console.log("Example 2 Output is :" + containsDuplicate([1, 2, 3, 4]));

// Example 3:
console.log("Example 3 Output is :" + containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

