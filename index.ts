import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';

function main(): void 
{
    const firstNumber: string = question('Enter first number:\n');
    const operator: string = question('Enter operator:\n');
    const secondNumber: string = question('Enter second number:\n');

    const validInput: boolean = isNumber(firstNumber) && isOperator(operator) && isNumber(secondNumber);

    if (validInput) 
    {
     const firstNum: number = parseInt(firstNumber);
     const secondNum: number = parseInt(secondNumber);
     const result = calculate(firstNum, operator as Operator, secondNum);
     console.log(result);
    }
    else
    {
        console.log('\ninvalid input\n');
        main()
    }

}

function calculate(firstNum:number, operator:Operator, secondNum:number) 
{
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

function isOperator(operator:string):boolean 
{
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

function isNumber(str: string): boolean {
    const isItNumber = parseInt(str);
    const isNum:boolean = !isNaN(isItNumber);
    return isNum;
}

main();