// Idea: Compare two numbers at a time — if one is bigger, swap them. Repeat until everything is sorted.

// Example:
// [5, 2, 4] → [2, 4, 5]



function bubbleSort(arr) {
  // 👇 OUTER LOOP: Controls PASSES (n-1 passes needed)
  // Each pass bubbles largest unsorted element to its final position
  for (let i = 0; i < arr.length - 1; i++) {
    
    // 👇 INNER LOOP: Compare adjacent pairs
    // j < arr.length - 1 - i: Skip already sorted elements at end
    // After pass 'i', last 'i' elements are correctly positioned
    for (let j = 0; j < arr.length - 1 - i; j++) {
      
      // 👇 COMPARE: If left > right, swap to bubble larger element right
      if (arr[j] > arr[j + 1]) {
        // 👇 SWAP VISUALIZATION
        console.log(`🔄 Swap at positions ${j} & ${j+1}:`);
        console.log(`   Before: ${arr[j]} > ${arr[j + 1]}`);
        
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        
        console.log(`   After:  ${arr[j]} < ${arr[j + 1]}`);
        console.log(`   Array:  [${arr.join(', ')}]`);
        console.log('');
      }
    }
  }
  return arr;
}

// Test
console.log("Start:", [5, 2, 4, 1].join(', '));
bubbleSort([5, 2, 4, 1]);







// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) { // repeat passes
//     for (let j = 0; j < arr.length - 1 - i; j++) { // compare pairs
//       if (arr[j] > arr[j + 1]) { // if wrong order
//         let temp = arr[j]; // swap them
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([5, 2, 4, 1]));






// Example

// Start: [5, 2, 4, 1]

// Pass 1 → compare (5,2) swap → [2,5,4,1]
// → (5,4) swap → [2,4,5,1]
// → (5,1) swap → [2,4,1,5]

// Pass 2 → (2,4) ok → (4,1) swap → [2,1,4,5]

// Pass 3 → (2,1) swap → [1,2,4,5]
// ✅ Sorted: [1,2,4,5]

// 🗣️ What to Say

// “Bubble Sort compares two numbers at a time and swaps them if the first is bigger.
// After each pass, the largest number moves to the end — like a bubble rising up.”

// ⏱️ Complexity

// Time: O(n²)

// Space: O(1)













// 🧩 Time Complexity: O(n²)
// 💬 Fun fact: The biggest number “bubbles up” to the end each round.