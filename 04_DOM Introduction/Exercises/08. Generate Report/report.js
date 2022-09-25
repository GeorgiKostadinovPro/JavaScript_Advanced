function generateReport() {
    let outputTextareaElement = document.querySelector('#output');
    let boxElements = document.querySelectorAll('thead tr th input');
    let trElements = document.querySelectorAll('tbody tr');
    let result = [];
 
    for (let i = 0; i < trElements.length; i++) {
        let report = {};

        for (let j = 0; j < boxElements.length; j++) {
            if (boxElements[j].checked) {
                report[boxElements[j].name] = trElements[i].children[j].textContent;
            }
        }

        result.push(report);
    }

    outputTextareaElement.textContent = JSON.stringify(result);
}