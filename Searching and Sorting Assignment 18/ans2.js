function sortFunction(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// Example 1:
const nums1 = [2, 0, 2, 1, 1, 0];
sortFunction(nums1);
console.log("Example 1 Output is :" + nums1);

// Example 2:
const nums2 = [2, 0, 1];
sortFunction(nums2);
console.log("Example 2 Output is :" + nums2);
