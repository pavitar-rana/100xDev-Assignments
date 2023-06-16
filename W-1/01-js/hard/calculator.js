class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero.");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, ""); // Remove all whitespace
    const regex = /^(\d+(\.\d+)?)|([\+\-\*\/\(\)])$/; // Valid number or operator regex

    let numberStack = [];
    let operatorStack = [];
    let currentNumber = "";

    for (let i = 0; i < sanitizedExpression.length; i++) {
      const char = sanitizedExpression[i];

      if (char.match(regex)) {
        currentNumber += char;
      } else {
        if (currentNumber !== "") {
          numberStack.push(parseFloat(currentNumber));
          currentNumber = "";
        }

        if (char === "(") {
          operatorStack.push(char);
        } else if (char === ")") {
          while (
            operatorStack.length > 0 &&
            operatorStack[operatorStack.length - 1] !== "("
          ) {
            this.performOperation(numberStack, operatorStack);
          }

          if (
            operatorStack.length === 0 ||
            operatorStack[operatorStack.length - 1] !== "("
          ) {
            throw new Error("Invalid expression.");
          }

          operatorStack.pop();
        } else {
          while (
            operatorStack.length > 0 &&
            this.getPrecedence(operatorStack[operatorStack.length - 1]) >=
              this.getPrecedence(char)
          ) {
            this.performOperation(numberStack, operatorStack);
          }

          operatorStack.push(char);
        }
      }
    }

    if (currentNumber !== "") {
      numberStack.push(parseFloat(currentNumber));
    }

    while (operatorStack.length > 0) {
      if (operatorStack[operatorStack.length - 1] === "(") {
        throw new Error("Invalid expression.");
      }
      this.performOperation(numberStack, operatorStack);
    }

    if (numberStack.length !== 1 || operatorStack.length !== 0) {
      throw new Error("Invalid expression.");
    }

    this.result = numberStack.pop();
  }

  performOperation(numberStack, operatorStack) {
    const operator = operatorStack.pop();
    const operand2 = numberStack.pop();
    const operand1 = numberStack.pop();

    let result;

    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        if (operand2 === 0) {
          throw new Error("Cannot divide by zero.");
        }
        result = operand1 / operand2;
        break;
    }

    numberStack.push(result);
  }

  getPrecedence(operator) {
    switch (operator) {
      case "+":
      case "-":
        return 1;
      case "*":
      case "/":
        return 2;
      default:
        return 0;
    }
  }
}

module.exports = Calculator;
