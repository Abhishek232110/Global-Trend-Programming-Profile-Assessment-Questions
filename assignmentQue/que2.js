// Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

function evaluateExpression(expression) {
  expression = expression.replace(/\s+/g, "");
  const tokens = expression.split(/([+-])/);
  let result = parseFloat(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const number = parseFloat(tokens[i + 1]);
    if (operator === "+") {
      result += number;
    } else if (operator === "-") {
      result -= number;
    }
  }
  return result;
}
console.log(evaluateExpression("10 + 20 - 20 + 1"));
