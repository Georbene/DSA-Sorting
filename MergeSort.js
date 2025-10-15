// Idea: Split the array into halves until only single items remain, then merge them in order.

// Example:
// [8, 4, 6, 2] → [2, 4, 6, 8]

function mergeSort(arr) {
  // 👇 BASE CASE: Single element or empty = already sorted
  if (arr.length <= 1) return arr;
  
  // 👇 SPLIT: Divide into two halves (divide & conquer)
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);   // 👇 Left half
  let right = arr.slice(mid);     // 👇 Right half
  
  console.log(`🔍 Split: [${arr.join(', ')}] → [${left.join(', ')}] | [${right.join(', ')}]`);
  
  // 👇 RECURSION: Sort each half
  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  
  // 👇 MERGE: Combine sorted halves
  let result = merge(sortedLeft, sortedRight);
  console.log(`   Merge: [${sortedLeft.join(', ')}] + [${sortedRight.join(', ')}] → [${result.join(', ')}]`);
  
  return result;
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0; // 👇 Pointers to current elements
  
  // 👇 COMPARE HEADS: Take smaller each time
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]); // 👇 Left is smaller
    } else {
      result.push(right[j++]); // 👇 Right is smaller
    }
  }
  
  // 👇 ADD REMAINING: One side may have leftovers
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);
  
  return result;
}

// Test
console.log("Start:", [8, 4, 6, 2]);
console.log("Sorted:", mergeSort([8, 4, 6, 2]));






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