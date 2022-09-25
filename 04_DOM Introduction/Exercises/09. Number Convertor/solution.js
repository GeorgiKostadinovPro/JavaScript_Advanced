function solve() {
    let inputElement = document.getElementById('input');
    let resultInputElement = document.getElementById('result');
    let selectToMenuElement = document.getElementById('selectMenuTo');
    let buttonElement = document.querySelector('button');

    let optionBinaryElement = document.createElement('option');
    optionBinaryElement.value = 'binary';
    optionBinaryElement.textContent = 'Binary';
    let optionHexadecimalElement = document.createElement('option');
    optionHexadecimalElement.value = 'hexadecimal';
    optionHexadecimalElement.textContent = 'Hexadecimal';
    selectToMenuElement.appendChild(optionBinaryElement);
    selectToMenuElement.appendChild(optionHexadecimalElement);

    buttonElement.addEventListener("click", (e) => {
        let number =  Number(inputElement.value);
          
        if (selectToMenuElement.value === 'binary') {
            resultInputElement.value = number.toString(2);
        }else{
            resultInputElement.value = number.toString(16).toUpperCase();
        }
    });
}