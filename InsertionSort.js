// Idea: Think of how you arrange playing cards — you take one card and put it in the right place among the sorted ones.

// Example:
// [5, 2, 4] → [2, 4, 5]


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > cur) arr[j + 1] = arr[j--];
    arr[j + 1] = cur;
    console.log(`Step ${i}: [${arr.join(', ')}]`);
  }
  return arr;
}

console.log("Start:", [5, 2, 4, 1]);
console.log(" Sorted:", insertionSort([5, 2, 4, 1]));




// Example

// Start: [5, 2, 4, 1]

// Pick 2 → insert before 5 → [2,5,4,1]
// Pick 4 → insert before 5 → [2,4,5,1]
// Pick 1 → insert before 2 → [1,2,4,5]
// ✅ Sorted: [1,2,4,5]

// 🗣️ What to Say

// “Insertion Sort works the way you sort playing cards in your hand —
// you take one card and place it in the correct spot among the sorted ones.”

// ⏱️ Complexity

// Time: O(n²)

// Space: O(1)







// 🧩 Time Complexity: Average: O(n log n) OR Worst: O(n²)

// 💬 Why “Quick”? It’s faster than others for large data.
