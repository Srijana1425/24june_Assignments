function nonrepeating(s) {
  const charCount = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.get(char) === 1) {
      return i;
    }
  }

  return -1;
}

// Example 1:
console.log("Example1 = " + nonrepeating("leetcode")); 

// Example 2:
console.log("Example2 = " + nonrepeating("loveleetcode"));

// Example 3:
console.log("Example3 = " + nonrepeating("aabb"));
