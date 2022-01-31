const defaultResult = 0
let currentResult = defaultResult
let logEntries = []
let logEntry = {}

function getUserNumberInput() {
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
    
}

function writeToLog(
    operationIdentifier,
    prevResuit,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResuit,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry)
    console.log(logEntries)

}

function calculateResult(calculationType) {
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'DIVIDE' &&
        calculationType !== 'MULTIPLY' ||
        !enteredNumber
    ) {
        return
    }
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    let mathOperator
    if (calculationType === 'ADD') {
        currentResult += +enteredNumber
        mathOperator = '+'
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= +enteredNumber
        mathOperator = '-'
    } else if (calculationType === 'DIVIDE') {
        currentResult /= +enteredNumber
        mathOperator = '/'
    } else {
        currentResult *= +enteredNumber
        mathOperator = '*'
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber)
    writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}

function add() {
    calculateResult('ADD')
}

function substract() {
    calculateResult('SUBTRACT')
}

function multiply() {
    calculateResult('MULTIPLY')
}

function divide() {
    calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)


