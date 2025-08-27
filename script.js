function operate(val1, val2, operator){
    if (operator === '+') {
        add(val1, val2)
    } else if (operator === '-') {
        subtract(val1, val2)
    } else if (operator === 'x') {
        multiply(val1, val2)
    } else if (operator === '/') {
        divide(val1, val2)
    }
}
function add(val1, val2){
    let rtrnVal = val1 + val2
    return rtrnVal
}
function subtract(val1, val2){
    let rtrnVal = val1 - val2
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

container.addEventListener('mouseover', function updateDisplay(){
    display.textContent = totalInput.totalDisplay.join(' ')
})

btnAdd.addEventListener('click', function addOperator(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'){

    } else {
        totalInput.totalDisplay.push('+')
    }

    console.log(totalInput.totalDisplay)
})
btnSubtract.addEventListener('click', function addOperator(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'){

    } else {
        totalInput.totalDisplay.push('-')
    }

    console.log(totalInput.totalDisplay)
})
btnMultiply.addEventListener('click', function addOperator(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'){

    } else {
        totalInput.totalDisplay.push('x')
    }

    console.log(totalInput.totalDisplay)
})
btnDivide.addEventListener('click', function addOperator(){
    if (totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '+' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '-'
        || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === 'x' || totalInput.totalDisplay[totalInput.totalDisplay.length - 1] === '/'){

    } else {
        totalInput.totalDisplay.push('/')
    }

    console.log(totalInput.totalDisplay)
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
    
    console.log(totalInput.totalDisplay)
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
    
    console.log(totalInput.totalDisplay)
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
    
    console.log(totalInput.totalDisplay)
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
    
    console.log(totalInput.totalDisplay)
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
    
    console.log(totalInput.totalDisplay)
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
    
    console.log(totalInput.totalDisplay)
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
    
    console.log(totalInput.totalDisplay)
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
    
    console.log(totalInput.totalDisplay)
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
    
    console.log(totalInput.totalDisplay)
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
    
    console.log(totalInput.totalDisplay)
})