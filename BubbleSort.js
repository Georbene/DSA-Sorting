// Idea: Compare two numbers at a time
// if one is bigger, swap them. Repeat until everything is sorted.


function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(`Pass ${i + 1}:`);
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
console.log("Sorted:", nums.join(', '));
