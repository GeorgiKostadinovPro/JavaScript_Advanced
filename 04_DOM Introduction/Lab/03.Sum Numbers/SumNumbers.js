function calc() {
    let inputElements = Array.from(document.querySelectorAll('input[type="text"]'));
    inputElements[2].value = inputElements
    .reduce((acc, x) => acc + Number(x.value), 0);
}
