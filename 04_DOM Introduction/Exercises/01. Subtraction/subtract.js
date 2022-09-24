function subtract() {
    let firstNumberInputElement = document.getElementById('firstNumber');
    let secondNumberInputElement = document.getElementById('secondNumber');
    let resultDivElement = document.getElementById('result');
   
    resultDivElement.textContent = Number(firstNumberInputElement.value) 
    - Number(secondNumberInputElement.value);
}