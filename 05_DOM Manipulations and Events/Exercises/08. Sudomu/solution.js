function solve() {
    let tableElement = document.querySelector('table');
    let trElements = Array.from(document.querySelectorAll('table tbody tr'));
    let [checkBtnElement, clearBtnElement] = document.querySelectorAll('tfoot button');
    let checkPElement = document.querySelector('#check p');

    let matrix = [];
    let inputElements = [];

    function notDoneYet() {
        tableElement.style.border = '2px solid red';
        checkPElement.textContent = 'NOP! You are not done yet...';
        checkPElement.style.color = 'red';
    }
    
    checkBtnElement.addEventListener('click', (e) => {
        trElements.forEach(el => {
            let inputInTdElements = Array.from(el.querySelectorAll('td input'));
        
            matrix.push(inputInTdElements.map(x => Number(x.value)));

            inputInTdElements.forEach(inputElement => {
                inputElements.push(inputElement);
            });
        });
        
        for (let i = 0; i < matrix.length; i++) {
            let rowSum = matrix[i].reduce((acc, x) => acc + x, 0);

            if(rowSum !== 6){
                notDoneYet();
                return;
            }
        }

        for (let i = 0; i < matrix.length; i++) {
            let colSum = matrix[0][i] + matrix[1][i] + matrix[2][i];

            if(colSum !== 6){
                notDoneYet();
                return;
            }
        }

        tableElement.style.border = '2px solid green';
        checkPElement.textContent = 'You solve it! Congratulations!';
        checkPElement.style.color = 'green';
    });
    
    clearBtnElement.addEventListener('click', (e) => {
        inputElements.forEach(el => {
            el.value = '';
        });

        tableElement.style.border = 'none';
        checkPElement.textContent = '';
        matrix.splice(0, 3);
        console.log(matrix);
    });
}