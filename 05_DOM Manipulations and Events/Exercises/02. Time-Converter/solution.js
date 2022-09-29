function attachEventsListeners() {
    let convertButtonElements = Array.from(document.querySelectorAll('input[type="button"]'));
    let textInputElements = Array.from(document.querySelectorAll('input[type="text"]'));

    const databaseObj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(inputValue, inputId){
        let days = Number(inputValue) / databaseObj[inputId];

        let convertedDatabaseObj = {
            days: days,
            hours: days * databaseObj.hours,
            minutes: days * databaseObj.minutes,
            seconds: days * databaseObj.seconds
        };

        return convertedDatabaseObj;
    }

    convertButtonElements.forEach(el => {
        el.addEventListener('click', (e) => {
            let currTextInputElement = e.currentTarget.parentNode.querySelector('input[type="text"]');
            let inputValue = currTextInputElement.value;
            let inputId = currTextInputElement.id;
            
            let convertedDatabaseObj = convert(inputValue, inputId);

            textInputElements.forEach(inputElement => {
                let currInputElementId = inputElement.id;
                inputElement.value = convertedDatabaseObj[currInputElementId];
            });
        });
    });
}