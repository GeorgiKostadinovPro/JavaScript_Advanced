function validate(e) {
    let formElement = document.getElementById('registerForm');
    let companyCheckboxElement = document.getElementById('company');
    let companyInfoFieldsetElement = document.getElementById('companyInfo');
    let validDivElement = document.getElementById('valid');
    let submitBtnElement = document.getElementById('submit');
    
    let usernameRegex = new RegExp(/^[A-Za-z0-9]{3,20}$/);
    let emailRegex = new RegExp(/^[^@.]+@[^@]*\.[^@]*$/);
    let passwordRegex = new RegExp(/^[\w]{5,15}$/);

    companyCheckboxElement.addEventListener('change', (e) => {
        if (companyCheckboxElement.checked) {
            companyInfoFieldsetElement.style.display = 'block';
        } else {
            companyInfoFieldsetElement.style.display = 'none';
        }
    });

    submitBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        let [usernameInputElement, emailInputElement, passwordInputElement, confirmPasswordInputElement] 
        = Array.from(formElement.elements).slice(1);

        if (!usernameRegex.test(usernameInputElement.value)) {
            usernameInputElement.style.borderColor = 'red';
        } else {
            usernameInputElement.style.borderColor = 'none';
        }

        if (!emailRegex.test(emailInputElement.value)) {
            emailInputElement.style.borderColor = 'red';
        } else {
            emailInputElement.style.borderColor = 'none';
        }

        if (passwordRegex.test(passwordInputElement.value)
            && passwordRegex.test(confirmPasswordInputElement.value)
            && passwordInputElement.value === confirmPasswordInputElement.value) {
            passwordInputElement.style.borderColor = 'none';
            confirmPasswordInputElement.style.borderColor = 'none';
        } else {
            passwordInputElement.style.borderColor = 'red';
            confirmPasswordInputElement.style.borderColor = 'red';
        }

        if (companyCheckboxElement.checked) {
            let companyNumberInputElement = document.getElementById('companyNumber');

            if (companyNumberInputElement.value < 1000 || companyNumberInputElement.value > 9999) {
                companyNumberInputElement.style.borderColor = 'red';
            } else {
                companyNumberInputElement.style.borderColor = '';
            }
        }

        let formElements = Array.from(formElement.elements)
        .slice(1)
        .map(x => x.style.borderColor);

        if (formElements.some(x => x == 'red')) {
            validDivElement.style.display = 'none';
        } else {
            validDivElement.style.display = 'block';
        }
    });
}