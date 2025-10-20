// Idea: Compare two numbers at a time — if one is bigger, swap them. Repeat until everything is sorted.

// Example:
// [5, 2, 4] → [2, 4, 5]
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(`\nPass ${i + 1}:`);
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
        console.log(`Swap → [${arr.join(', ')}]`);
      }
    }
  }
  return arr;
}

// Example
let nums = [5, 2, 7, 9, 4, 1];
console.log("Start:", nums.join(', '));
bubbleSort(nums);
console.log("\n Sorted:", nums.join(', '));






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