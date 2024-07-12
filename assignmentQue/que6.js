// Write a function that takes a string and capitalizes the first letter of each word in the string.
function capitalizesstring(arr) {
  let str = [];
  for (let i = 0; i < arr.length; i++) {
    let store = arr[i].split("");
    store[0] = store[0].toUpperCase();
    str.push(store.sort().join(""));
  }
  return str;
}
console.log(capitalizesstring(["hello", "But", "seen"]));
