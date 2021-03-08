/* Basic Calculator 
    USAGE

    ENTER "OPERATION a b"
    EXAMPLE "add 1 2"

    OPERATIONS: (add, subtract, multiply, divide)

    PRESS CTRL + C TO EXIT
*/

const readConsole = require('readline'); // Reads console input

const value = readConsole.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Run "Main"
main();

// Main
function main() {
    value.question('\n\nENTER "OPERATION a b"\nOPERATIONS (add, subtract, multiply, divide)\nExample: "add 1 2"\n"PRESS CTRL + C TO EXIT"\n\n',
    (answer) => {
        let input = answer.split(' ');
        console.log('--------------------------------------------------');
        calculator(input[0], Number(input[1]), Number(input[2]));
        console.log('--------------------------------------------------');
        //value.close();
        main();
    });
}

// Calculate Function
function calculator(operation, a, b) {
    if(!isNaN(a) && !isNaN(b)){
        switch(operation) {
            case "add":
                console.log(`${a} + ${b} = ${add(a, b)}`);
                break;
            case "subtract":
                console.log(`${a} - ${b} = ${subtract(a, b)}`);
                break;
            case "multiply":
                console.log(`${a} * ${b} = ${multiply(a, b)}`);
                break;
            case "divide":
                console.log(`${a} / ${b} = ${divide(a, b)}`);
                break;
            default:
                console.log('Enter Valid Operation');
        }
    }else {
        console.log('Enter Valid Inputs');
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
