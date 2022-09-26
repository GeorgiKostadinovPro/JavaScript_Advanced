function addItem() {
    let textInputElement = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');

    let liElement = document.createElement('li');
    liElement.textContent = textInputElement.value;
    let linkElement = document.createElement('a');
    linkElement.textContent = '[Delete]';

    linkElement.href = '#';
    linkElement.addEventListener('click', (e) => {
        let liToDelete = e.currentTarget.parentNode;
        ulElement.removeChild(liToDelete);
    });
    
    liElement.appendChild(linkElement);
    ulElement.appendChild(liElement);
    textInputElement.value = '';
}