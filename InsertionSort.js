// Idea: Think of how you arrange playing cards — you take one card and put it in the right place among the sorted ones.

// Example:
// [5, 2, 4] → [2, 4, 5]


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([5, 2, 4, 1]));

// 🧩 Time Complexity: Average: O(n log n) OR Worst: O(n²)

// 💬 Why “Quick”? It’s faster than others for large data.
