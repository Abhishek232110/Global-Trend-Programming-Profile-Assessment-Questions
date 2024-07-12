// Write a function that takes a nested array and returns a flattened array.

function NestedArray(array) {
  let array1 = array.flat();
  console.log(array1);
}
console.log(
  NestedArray([
    [10, 20, 30],
    [40, 50, 60],
  ])
);
