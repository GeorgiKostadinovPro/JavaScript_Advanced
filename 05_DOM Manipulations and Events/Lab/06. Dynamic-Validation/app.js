function validate() {
    let emailInputElement = document.getElementById('email');
    let regex = /[a-z]+@[a-z]+.[a-z]+/gm;

    emailInputElement.addEventListener('change', (e) => {
        if(!regex.test(e.currentTarget.value)){
            e.currentTarget.classList.add('error');
        }else{
            e.currentTarget.classList.remove('error');
        }
    });
}