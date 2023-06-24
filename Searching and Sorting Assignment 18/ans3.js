function isBadVersion(version) {

}

function firstBadVersion(n) {
  let left = 1;
  let right = n;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// Example 1:
console.log("Example 1 Output is :" + firstBadVersion(5, 4));


// Example 2:
console.log("Example 2 Output is :" + firstBadVersion(1, 1));

