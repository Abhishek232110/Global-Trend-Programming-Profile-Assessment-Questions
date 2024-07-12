// Write a function that converts a given string to title case (capitalizing the first letter of each word).
function capitalizesstring(arr) {
  let str = [];
  for (let i = 0; i < arr.length; i++) {
    let store = arr[i].split("");
    store[0] = store[0].toUpperCase();
    str.push(store.sort().join(""));
  }
  return str.forEach((ele) => console.log(ele));
}
console.log(capitalizesstring(["hello", "But", "seen"]));
