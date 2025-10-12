// Idea: Compare two numbers at a time — if one is bigger, swap them. Repeat until everything is sorted.

// Example:
// [5, 2, 4] → [2, 4, 5]


function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 2, 4, 1]));


// 🧩 Time Complexity: O(n²)
// 💬 Fun fact: The biggest number “bubbles up” to the end each round.