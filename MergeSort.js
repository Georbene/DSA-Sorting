// Idea: Split the array into halves 
// until only single items remain, then merge them in order.


function mergeSort(arr, d = 0) {
  if (arr.length <= 1) return arr;

  let s = " ".repeat(d * 2);
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  console.log(`${s}Split: [${arr.join(', ')}]`);
  let merged = merge(mergeSort(left, d + 1), mergeSort(right, d + 1));
  console.log(`${s}Merge: [${merged.join(', ')}]`);
  return merged;
}

function merge(left, right) {
  let r = [];
  while (left.length && right.length)
    r.push(left[0] < right[0] ? left.shift() : right.shift());
  return [...r, ...left, ...right];
}

let nums = [8, 4, 6, 2];
console.log("Start:", nums.join(', '));
console.log("\n Sorted:", mergeSort(nums).join(', '));
