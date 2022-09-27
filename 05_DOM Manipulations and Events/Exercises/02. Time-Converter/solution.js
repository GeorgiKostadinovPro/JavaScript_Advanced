function attachEventsListeners() {
    let convertButtonElements = Array.from(document.querySelectorAll('input[type="button"]'));
    let textInputElements = Array.from(document.querySelectorAll('input[type="text"]'));

    const database = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(inputValue, inputId){
        let days = Number(inputValue) / database[inputId];

        let convertedDatabaseObj = {
            days: days,
            hours: days * database.hours,
            minutes: days * database.minutes,
            seconds: days * database.seconds
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