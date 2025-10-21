// Idea: Pick a pivot (usually last item).
// Put smaller items on the left and larger items on the right — then sort each side again.

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
