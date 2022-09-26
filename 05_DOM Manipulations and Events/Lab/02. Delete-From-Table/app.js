function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name="email"]');
    let tbodyElement = document.querySelector('#customers tbody');
    let resultDivElement = document.getElementById('result');

    let trToDelete = Array.from(tbodyElement.querySelectorAll('tr'))
    .find(x => x.textContent.includes(emailInputElement.value));

    if(trToDelete){
        tbodyElement.removeChild(trToDelete);
        resultDivElement.textContent = 'Deleted';
    }else{
        resultDivElement.textContent = 'Not found.';
    }

    emailInputElement.value = '';
}