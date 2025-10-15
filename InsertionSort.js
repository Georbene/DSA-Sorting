// Idea: Think of how you arrange playing cards — you take one card and put it in the right place among the sorted ones.

// Example:
// [5, 2, 4] → [2, 4, 5]


function insertionSort(arr) {
  // 👇 OUTER LOOP: Build sorted portion one element at a time
  // Start from index 1 (second element) - first element is already "sorted"
  for (let i = 1; i < arr.length; i++) { 
    let current = arr[i]; // 👇 Current element to insert into sorted portion
    let j = i - 1;        // 👇 Start from previous element (end of sorted part)
    
    // 👇 INNER LOOP: Shift larger elements right to make space
    // Continue while: not at start AND previous element > current
    while (j >= 0 && arr[j] > current) { 
      arr[j + 1] = arr[j]; // 👇 Shift larger element one position right
      j--;                 // 👇 Move left to check previous element
    }
    
    // 👇 INSERT: Place current element in correct position after shifting
    arr[j + 1] = current;
    
    // 👇 OPTIONAL: Show step-by-step for presentation
    console.log(`Step ${i}: Inserted ${current} → [${arr.join(', ')}]`);
  }
  return arr;
}

console.log("Start:", [5, 2, 4, 1]);
console.log("Result:", insertionSort([5, 2, 4, 1]));



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
