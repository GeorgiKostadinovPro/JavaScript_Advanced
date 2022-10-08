function validate() {
    let emailInputElement = document.getElementById('email');
    const emailRegex = new RegExp(/^[a-z]+@[a-z]+.[a-z]+$/gm);

    emailInputElement.addEventListener('change', (e) => {
        if(!e.currentTarget.value.match(emailRegex)){
            e.currentTarget.classList.add('error');
        }else{
            e.currentTarget.classList.remove('error');
        }
    });
}