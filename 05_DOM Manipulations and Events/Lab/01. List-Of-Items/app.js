function addItem() {
    let textInputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');

    let liElement = document.createElement('li');
    liElement.textContent = textInputElement.value;

    ulElement.appendChild(liElement);
    textInputElement.value = '';
}