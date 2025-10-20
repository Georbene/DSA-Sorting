// Idea: Split the array into halves until only single items remain, then merge them in order.

// Example:
// [8, 4, 6, 2] → [2, 4, 6, 8]







// function mergeSort(arr) {
//   if (arr.length <= 1) return arr; // base case

//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);

//   console.log(`Split: [${arr.join(', ')}] → [${left.join(', ')}] | [${right.join(', ')}]`);

//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let res = [];
//   while (left.length && right.length) {
//     res.push(left[0] < right[0] ? left.shift() : right.shift());
//   }
//   return [...res, ...left, ...right];
// }

// // Example
// let nums = [8, 4, 6, 2];
// console.log("Start:", nums.join(', '));
// console.log("\n✅ Sorted:", mergeSort(nums).join(', '));



function mergeSort(arr, d = 0) {
  if (arr.length <= 1) return arr;

  let s = " ".repeat(d * 2);
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  console.log(`${s}Split: [${arr.join(', ')}]`);
  let merged = merge(mergeSort(left, d + 1), mergeSort(right, d + 1));
  console.log(`${s}Merge: [${merged.join(', ')}]`);
  return merged;
}

function merge(left, right) {
  let r = [];
  while (left.length && right.length)
    r.push(left[0] < right[0] ? left.shift() : right.shift());
  return [...r, ...left, ...right];
}

let nums = [8, 4, 6, 2];
console.log("Start:", nums.join(', '));
console.log("\n Sorted:", mergeSort(nums).join(', '));








// Example

// Start: [5, 2, 4, 1]
// → Split into [5,2] and [4,1]
// → Split again → [5] [2] [4] [1]
// → Merge → [2,5] and [1,4]
// → Merge all → [1,2,4,5]
// ✅ Sorted: [1,2,4,5]

// 🗣️ What to Say

// “Merge Sort keeps splitting the array into halves until single elements remain.
// Then it merges them back in order, like combining sorted piles.”

// ⏱️ Complexity

// Time: O(n log n)

// Space: O(n)



// 🧩 Time Complexity: O(n log n)
// 💬 Why good: Works very consistently, even for large data.