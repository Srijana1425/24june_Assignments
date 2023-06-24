// function DataStream(arr) {
//   const leftSmaller = [];
//   const rightSmaller = [];
//   const n = arr.length;

//   for (let i = 0; i < n; i++) {
//     leftSmaller[i] = 0;
//     rightSmaller[i] = 0;
//   }

//   const stack = [];

//   for (let i = 0; i < n; i++) {
//     while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
//       stack.pop();
//     }

//     if (stack.length > 0) {
//       leftSmaller[i] = arr[stack[stack.length - 1]];
//     }

//     stack.push(i);
//   }

//   while (stack.length > 0) {
//     stack.pop();
//   }

//   for (let i = n - 1; i >= 0; i--) {
//     while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
//       stack.pop();
//     }

//     if (stack.length > 0) {
//       rightSmaller[i] = arr[stack[stack.length - 1]];
//     }

//     stack.push(i);
//   }

//   let maxDiff = -1;

//   for (let i = 0; i < n; i++) {
//     const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
//     maxDiff = Math.max(maxDiff, diff);
//   }

//   return maxDiff;
// }

// // Example 1:
// const arr1 = [2, 1, 8];
// console.log(DataStream(arr1)); 

// // Example 2:
// const arr2 = [4, 7, 5, 6, 3, 8, 2];
// console.log(DataStream(arr2));

let stream=["DataStream", "consec", "consec", "consec", "consec"][[4, 3], [4], [4], [4], [3]]
var DataStream = function(value, k) {
  this.stream = [];
  this.value = value;
  this.k = k;
  this.tracker = 0;
};
DataStream.prototype.consec = function(num) {
  this.stream.push(num);
  if (num === this.value) this.tracker += 1;
  else this.tracker = 0;
  if (this.stream.length < this.k) return false;
  if (this.stream.length >= this.k && this.tracker >= this.k) {
      return true;
  } else return false;
};

// Example 1
var dataStream = new DataStream(4, 3);
console.log(dataStream.consec(4));
console.log(dataStream.consec(4));
console.log(dataStream.consec(4));
console.log(dataStream.consec(3));
