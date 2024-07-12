// Write a function that takes an array and returns a new array with duplicates removed.
function removeDuplicates(arr) {
  const uniqueArray = [];
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      uniqueArray.push(arr[i]);
      seen[arr[i]] = true;
    }
  }
  return uniqueArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
