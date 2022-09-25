function solve() {
    let inputElement = document.getElementById('input');
    let resultInputElement = document.getElementById('result');
    let selectToMenuElement = document.getElementById('selectMenuTo');
    let buttonElement = document.querySelector('button');

    let optionBinary = document.createElement('option');
    optionBinary.value = 'binary';
    optionBinary.textContent = 'Binary';
    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.textContent = 'Hexadecimal';
    selectToMenuElement.appendChild(optionBinary);
    selectToMenuElement.appendChild(optionHexadecimal);

    buttonElement.addEventListener("click", (e) => {
        let number =  Number(inputElement.value);
          
        if (selectToMenuElement.value === 'binary') {
            resultInputElement.value = number.toString(2);
        }else{
            resultInputElement.value = number.toString(16).toUpperCase();
        }
    });
}