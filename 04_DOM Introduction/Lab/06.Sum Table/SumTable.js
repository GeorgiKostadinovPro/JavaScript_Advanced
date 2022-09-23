function sumTable() {
    let tdElements = Array.from(document.querySelectorAll('td:nth-child(2)'))
    .filter(x => !x.id);

    let resultTdElement = document.getElementById('sum');
    resultTdElement.textContent = tdElements
    .map(x => Number(x.textContent))
    .reduce((acc, x) => acc + x, 0);
}