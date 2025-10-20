// Idea: Pick a pivot (usually last item).
// Put smaller items on the left and larger items on the right — then sort each side again.

// Example:
// [5, 2, 8] → [2, 5, 8]

function quickSort(arr) {
  if (arr.length <= 1) return arr; // base case

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  console.log(`Pivot ${pivot} → Left: [${left.join(', ')}], Right: [${right.join(', ')}]`);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example
let nums = [5, 2, 8, 3, 1];
console.log("Start:", nums.join(', '));
console.log("\n Sorted:", quickSort(nums).join(', '));




// Example

// Start: [5, 2, 4, 1]
// Pick pivot = 1
// Left = [] | Right = [5,2,4]
// → [...[], 1, ...quickSort([5,2,4])]

// Next: [5,2,4] pivot = 4
// Left = [2] | Right = [5]
// ✅ Sorted: [1,2,4,5]

// 🗣️ What to Say

// “Quick Sort picks one number as a pivot and splits the array into smaller and larger parts.
// It keeps sorting those smaller parts again and again until everything is ordered.”

// ⏱️ Complexity

// Time: O(n log n) average, O(n²) worst

// Space: O(log n)



// 🧩 Time Complexity: Average: O(n log n) OR Worst: O(n²)

// 💬 Why “Quick”? It’s faster than others for large data.