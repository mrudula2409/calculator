let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function appendNumber(number) {
    if (displayValue === '0' || waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
    operator = op;
    waitingForSecondOperand = true;
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function calculate() {
    if (operator === null || waitingForSecondOperand) return;

    const secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                alert("Error: Division by zero");
                clearDisplay();
                return;
            }
            result = firstOperand / secondOperand;
            break;
    }

    displayValue = result.toString();
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

updateDisplay();

      