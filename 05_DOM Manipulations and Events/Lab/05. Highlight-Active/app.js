function focused() {
    let inputElements = Array.from(document.querySelectorAll('input[type="text"]'));

    inputElements.forEach(el => {
        el.addEventListener('focus', (e) => {
            e.currentTarget.parentNode.classList.add('focused');
        });

        el.addEventListener('blur', (e) => {
            e.currentTarget.parentNode.classList.remove('focused');
        });
    });
}