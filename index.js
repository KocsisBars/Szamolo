"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstNumber = (0, readline_sync_1.question)('Enter first number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondNumber = (0, readline_sync_1.question)('Enter second number:\n');
    var validInput = isNumber(firstNumber) && isOperator(operator) && isNumber(secondNumber);
    if (validInput) {
        var firstNum = parseInt(firstNumber);
        var secondNum = parseInt(secondNumber);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var isItNumber = parseInt(str);
    var isNum = !isNaN(isItNumber);
    return isNum;
}
main();
