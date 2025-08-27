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
    operateOnThis: [totalDisplay[0], totalDisplay[1], totalDisplay[2]],
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

btnOne.addEventListener('click', function addNumber(){

})
btnTwo.addEventListener('click', function addNumber(){

})
btnThree.addEventListener('click', function addNumber(){

})
btnFour.addEventListener('click', function addNumber(){

})
btnFive.addEventListener('click', function addNumber(){

})
btnSix.addEventListener('click', function addNumber(){

})
btnSeven.addEventListener('click', function addNumber(){

})
btnEight.addEventListener('click', function addNumber(){

})
btnNine.addEventListener('click', function addNumber(){

})

console.log(totalInput)