function extractText() {
    let liElements = Array.from(document.querySelectorAll('#items li'));
    let textareaElement = document.getElementById('result');

    textareaElement.textContent = liElements
    .map(x => x.textContent)
    .join('\n');
}