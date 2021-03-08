/* Basic Calculator 2
    USAGE

    run file and pass in necessary commandline Arguments

    node calculator2.js OPERATION a b
    
    EXAMPLE 
    node calculator2.js add 1 2

    OPERATIONS: (add, subtract, multiply, divide)

    PRESS CTRL + C TO EXIT
*/

const readConsole = require('readline'); // Reads console input

const value = readConsole.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = process.argv.slice(2);

//Run "Main"
main();

// Main
function main() {
    let answer = calculator(input[0], Number(input[1]), Number(input[2]));
    console.log(answer);
    return answer;
}

// Calculate Function
function calculator(operation, a, b) {
    if(!isNaN(a) && !isNaN(b)){
        switch(operation) {
            case "add":
                return add(a, b);
            case "subtract":
                return subtract(a, b);
            case "multiply":
                return multiply(a, b);
            case "divide":
                return divide(a, b);
            default:
                return 'Enter Valid Operation';
        }
    }else {
        return 'Enter Valid Inputs';
    }
}

// Add Function
function add(a, b) {
    return a + b;
}

// Subtract Function
function subtract(a, b) {
    return a - b;
}

// Multiply Function
function multiply(a, b) {
    return a * b;
}

// Divide Function
function divide(a, b) {
    return (b == 0) ? 'Cant Divide  by Zero' : a / b;
}
