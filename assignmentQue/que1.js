function PrintNumber(n) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      array.push("Fizz");
    } else if (i % 5 == 0) {
      array.push("Buzz");
    } else if (i % 15 == 0) {
      array.push("FizzBuzz");
    } else {
      array.push(i);
    }
  }
  return array.forEach((ele) => console.log(ele));
}
console.log(PrintNumber(100));
