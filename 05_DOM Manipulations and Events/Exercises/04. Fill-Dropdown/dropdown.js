function addItem() {
    let textInputElement = document.getElementById('newItemText');
    let valueInputElement = document.getElementById('newItemValue');
    let menuSelectElement = document.getElementById('menu');

    let optionElement = document.createElement('option');
    optionElement.textContent = textInputElement.value;
    optionElement.value = valueInputElement.value;

    menuSelectElement.appendChild(optionElement);
    textInputElement.value = '';
    valueInputElement.value = '';
}