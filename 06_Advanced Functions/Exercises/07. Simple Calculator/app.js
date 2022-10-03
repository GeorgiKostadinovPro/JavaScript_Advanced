function calculator() {
    let firstElement = null;
    let secondElement = null;
    let result = null;

    return {
        init(selector1, selector2, resultSelector) {
            firstElement = document.querySelector(selector1);
            secondElement = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },

        add() {
            result.value = Number(firstElement.value) + Number(secondElement.value);
        },

        subtract() {
            result.value = Number(firstElement.value) - Number(secondElement.value);
        }
    };
}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');




