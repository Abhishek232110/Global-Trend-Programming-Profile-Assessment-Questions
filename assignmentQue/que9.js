function FilterEvenNumber(array) {
  const store = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      store.push(array[i]);
    }
  }
  return store.forEach((ele) => console.log("even numbers =", ele));
}
console.log(FilterEvenNumber([1, 2, 3, 4, 5, 6, 7, 8]));
