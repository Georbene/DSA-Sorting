// Idea: Think of how you arrange playing cards
// you take one card and put it in the right place among the sorted ones.

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
