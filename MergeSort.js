// Idea: Split the array into halves until only single items remain, then merge them in order.

// Example:
// [8, 4, 6, 2] → [2, 4, 6, 8]


function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) sorted.push(left.shift());
    else sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right];
}

console.log(mergeSort([8, 4, 6, 2]));



// 🧩 Time Complexity: O(n log n)
// 💬 Why good: Works very consistently, even for large data.