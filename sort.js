function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {       // passes
    for (let j = 0; j < arr.length - 1 - i; j++) { // compare pairs
      if (arr[j] > arr[j + 1]) {                   // swap if needed
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        console.log(`Swap → [${arr.join(', ')}]`);
      }
    }
  }
  return arr;
}

console.log("Start:", [5, 2, 4, 1]);
console.log("Sorted:", bubbleSort([5, 2, 4, 1]));