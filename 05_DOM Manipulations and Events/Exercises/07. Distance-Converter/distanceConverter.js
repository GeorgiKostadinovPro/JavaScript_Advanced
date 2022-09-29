function attachEventsListeners() {
    let [inputElement, outputElement] = document.querySelectorAll('input[type="text"]');
    let unitsInputElement = document.getElementById('inputUnits');
    let unitsOutputElement = document.getElementById('outputUnits');
    let convertBtnElement = document.getElementById('convert');

    let databaseObj = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    convertBtnElement.addEventListener('click', (e) => {
        let valueToConvert = Number(inputElement.value);
        let fromUnit = unitsInputElement.value;
        let toUnit = unitsOutputElement.value;

        let valueToMeters = valueToConvert * databaseObj[fromUnit];

        let result = valueToMeters / databaseObj[toUnit];
        outputElement.value = result;
    });
}