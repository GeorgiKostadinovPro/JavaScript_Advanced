function toggle() {
    let buttonElement = document.querySelector('.button');
    let extraDivElement = document.getElementById('extra');

    if(buttonElement.textContent === 'More'){
        extraDivElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    }else{
        extraDivElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}