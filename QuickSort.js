// Idea: Pick a pivot (usually last item).
// Put smaller items on the left and larger items on the right — then sort each side again.

// Example:
// [5, 2, 8] → [2, 5, 8]

function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 2, 8, 3, 1]));



// 🧩 Time Complexity: Average: O(n log n) OR Worst: O(n²)

// 💬 Why “Quick”? It’s faster than others for large data.