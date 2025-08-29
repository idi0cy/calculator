function operate(val1, val2, operator, i){
    let theReturn = 0
    if (operator === '+') {
        theReturn = add(val1, val2)
    } else if (operator === '-') {
        theReturn = subtract(val1, val2)
    } else if (operator === 'x') {
        theReturn = multiply(val1, val2)
    } else if (operator === '/') {
        theReturn = divide(val1, val2)
    }

    totalInput.totalDisplay.splice((i + (i-2)), 3, theReturn.toString())
    totalInput.operatorList.splice((i-1), 1)
    console.log(totalInput.totalDisplay)
}
function add(val1, val2){
    let rtrnVal = (val1 * 100) + (val2 * 100)
    rtrnVal = rtrnVal / 100
    return rtrnVal
}
function subtract(val1, val2){
    let rtrnVal = (val1 * 100) - (val2 * 100)
    rtrnVal = rtrnVal / 100
    return rtrnVal
}
function multiply(val1, val2){
    let rtrnVal = val1 * val2
    return rtrnVal
}
function divide(val1, val2){
    let rtrnVal = val1 / val2
    rtrnVal = Math.round(rtrnVal * 100) / 100
    return rtrnVal
}

let totalInput = {
    totalDisplay: [],
    operatorList: [],
}

const display = document.querySelector(".display")

const btnOne = document.querySelector(".one")
const btnTwo = document.querySelector(".two")
const btnThree = document.querySelector(".three")
const btnFour = document.querySelector(".four")
const btnFive = document.querySelector(".five")
const btnSix = document.querySelector(".six")
const btnSeven = document.querySelector(".seven")
const btnEight = document.querySelector(".eight")
const btnNine = document.querySelector(".nine")
const btnZero = document.querySelector(".zero")

const btnAdd = document.querySelector('.add')
const btnSubtract = document.querySelector('.subtract')
const btnMultiply = document.querySelector('.multiply')
const btnDivide = document.querySelector('.divide')

const container = document.querySelector('.container')

const btnEquals = document.querySelector('.equals')

btnEquals.addEventListener('click', function compute(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length-1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length-1] === '-' ||
        totalInput.totalDisplay[totalInput.totalDisplay.length-1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length-1] === '/' ){
        totalInput.totalDisplay.pop()
    }
    while (totalInput.operatorList.length > 0){
        for (let i = 1; i <= totalInput.operatorList.length; i++){
            if (totalInput.operatorList[i-1] === 'x' || totalInput.operatorList[i-1] === '/'){
                let value1 = parseFloat(totalInput.totalDisplay[(i+i-1)-1])
                let value2 = parseFloat(totalInput.totalDisplay[(i+i-1)+1])
                let theOperator = totalInput.operatorList[i-1]
                operate(value1, value2, theOperator, i)
                
            }
        }
        for (let i = 1; i<= totalInput.operatorList.length; i++){
            if (totalInput.operatorList[i-1] === '+' || totalInput.operatorList[i-1] === '-') {
                let theValue1 = parseFloat(totalInput.totalDisplay[(i+i-1)-1])
                let theValue2 = parseFloat(totalInput.totalDisplay[(i+i-1)+1])
                let usedOperator = totalInput.operatorList[i-1]
                operate(theValue1, theValue2, usedOperator, i)
            }
        }
    }
    
    
})

container.addEventListener('mouseover', function updateDisplay(){
    display.textContent = totalInput.totalDisplay.join(' ')
})

display.addEventListener('mouseover', function updateDisplay(){
    display.textContent = totalInput.totalDisplay.join(' ')
})

btnAdd.addEventListener('click', function addOperator(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'
        || totalInput.totalDisplay.length === 0){

    } else {
        totalInput.totalDisplay.push('+')
        totalInput.operatorList.push('+')
    }

})
btnSubtract.addEventListener('click', function addOperator(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'){

    } else {
        totalInput.totalDisplay.push('-')
        totalInput.operatorList.push('-')
    }

    
})
btnMultiply.addEventListener('click', function addOperator(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'){

    } else {
        totalInput.totalDisplay.push('x')
        totalInput.operatorList.push('x')
    }

    
})
btnDivide.addEventListener('click', function addOperator(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'){

    } else {
        totalInput.totalDisplay.push('/')
        totalInput.operatorList.push('/')
    }

    
})

btnOne.addEventListener('click', function addNumber(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'
    ) {
        totalInput.totalDisplay.push('1')
    } else if (totalInput.totalDisplay.length === 0){
        totalInput.totalDisplay.push('1')
    } else {
        totalInput.totalDisplay[totalInput.totalDisplay.length - 1] = totalInput.totalDisplay[totalInput.totalDisplay.length - 1] + '1'
    }
    
    
})
btnTwo.addEventListener('click', function addNumber(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'
    ) {
        totalInput.totalDisplay.push('2')
    } else if (totalInput.totalDisplay.length === 0){
        totalInput.totalDisplay.push('2')
    } else {
        totalInput.totalDisplay[totalInput.totalDisplay.length - 1] = totalInput.totalDisplay[totalInput.totalDisplay.length - 1] + '2'
    }
    
    
})
btnThree.addEventListener('click', function addNumber(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'
    ) {
        totalInput.totalDisplay.push('3')
    } else if (totalInput.totalDisplay.length === 0){
        totalInput.totalDisplay.push('3')
    } else {
        totalInput.totalDisplay[totalInput.totalDisplay.length - 1] = totalInput.totalDisplay[totalInput.totalDisplay.length - 1] + '3'
    }
    
    
})
btnFour.addEventListener('click', function addNumber(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'
    ) {
        totalInput.totalDisplay.push('4')
    } else if (totalInput.totalDisplay.length === 0){
        totalInput.totalDisplay.push('4')
    } else {
        totalInput.totalDisplay[totalInput.totalDisplay.length - 1] = totalInput.totalDisplay[totalInput.totalDisplay.length - 1] + '4'
    }
    
    
})
btnFive.addEventListener('click', function addNumber(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'
    ) {
        totalInput.totalDisplay.push('5')
    } else if (totalInput.totalDisplay.length === 0){
        totalInput.totalDisplay.push('5')
    } else {
        totalInput.totalDisplay[totalInput.totalDisplay.length - 1] = totalInput.totalDisplay[totalInput.totalDisplay.length - 1] + '5'
    }
    
    
})
btnSix.addEventListener('click', function addNumber(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'
    ) {
        totalInput.totalDisplay.push('6')
    } else if (totalInput.totalDisplay.length === 0){
        totalInput.totalDisplay.push('6')
    } else {
        totalInput.totalDisplay[totalInput.totalDisplay.length - 1] = totalInput.totalDisplay[totalInput.totalDisplay.length - 1] + '6'
    }
    
    
})
btnSeven.addEventListener('click', function addNumber(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'
    ) {
        totalInput.totalDisplay.push('7')
    } else if (totalInput.totalDisplay.length === 0){
        totalInput.totalDisplay.push('7')
    } else {
        totalInput.totalDisplay[totalInput.totalDisplay.length - 1] = totalInput.totalDisplay[totalInput.totalDisplay.length - 1] + '7'
    }
    
    
})
btnEight.addEventListener('click', function addNumber(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'
    ) {
        totalInput.totalDisplay.push('8')
    } else if (totalInput.totalDisplay.length === 0){
        totalInput.totalDisplay.push('8')
    } else {
        totalInput.totalDisplay[totalInput.totalDisplay.length - 1] = totalInput.totalDisplay[totalInput.totalDisplay.length - 1] + '8'
    }
    
    
})
btnNine.addEventListener('click', function addNumber(){
 if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'
    ) {
        totalInput.totalDisplay.push('9')
    } else if (totalInput.totalDisplay.length === 0){
        totalInput.totalDisplay.push('9')
    } else {
        totalInput.totalDisplay[totalInput.totalDisplay.length - 1] = totalInput.totalDisplay[totalInput.totalDisplay.length - 1] + '9'
    }
    
    
})
btnZero.addEventListener('click', function addNumber(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'
    ) {
        totalInput.totalDisplay.push('0')
    } else if (totalInput.totalDisplay.length === 0){
        totalInput.totalDisplay.push('0')
    } else {
        totalInput.totalDisplay[totalInput.totalDisplay.length - 1] = totalInput.totalDisplay[totalInput.totalDisplay.length - 1] + '0'
    }
    
    
})