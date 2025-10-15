// Idea: Pick a pivot (usually last item).
// Put smaller items on the left and larger items on the right — then sort each side again.

// Example:
// [5, 2, 8] → [2, 5, 8]

function quickSort(arr) {
  // 👇 BASE CASE: 0 or 1 elements = already sorted
  if (arr.length <= 1) return arr;
  
  // 👇 PICK PIVOT (last element in this example)
  let pivot = arr[arr.length - 1];
  console.log(`🔍 Pivot: ${pivot}`);
  
  let left = [];  // 👇 SMALLER than pivot
  let right = []; // 👇 LARGER than pivot
  
  // 👇 PARTITION: Divide array around pivot
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);   // 👇 Goes to LEFT (smaller)
    } else {
      right.push(arr[i]);  // 👇 Goes to RIGHT (larger)
    }
  }
  
  console.log(`   Left: [${left.join(', ')}] | Pivot: [${pivot}] | Right: [${right.join(', ')}]`);
  
  // 👇 RECURSION: Sort sub-arrays (divide & conquer!)
  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);
  
  // 👇 COMBINE: Sorted left + pivot + sorted right
  return [...sortedLeft, pivot, ...sortedRight];
}

// Test
console.log("Start:", [5, 2, 8, 3, 1]);
console.log("Sorted:", quickSort([5, 2, 8, 3, 1]));





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