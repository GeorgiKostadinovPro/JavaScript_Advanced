function attachEventsListeners() {
    let [inputElement, outputElement] = document.querySelectorAll('input[type="text"]');
    let convertBtnElement = document.getElementById('convert');

    let inputUnits = document.getElementById('inputUnits');
    let outputUnits = document.getElementById('outputUnits');

    let unitsObj = {
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
        let fromUnit = inputUnits.value;
        let toUnit = outputUnits.value;

        let valueToMeters = valueToConvert * unitsObj[fromUnit];

        let result = valueToMeters / unitsObj[toUnit];
        outputElement.value = result;
    });
}