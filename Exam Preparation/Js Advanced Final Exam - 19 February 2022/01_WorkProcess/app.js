function solve() {
    let formElement = document.querySelector('form');
    let tableContentElement = document.querySelector('#table .tbl-content #tbody');
    let hireWorkerBtnElement = document.getElementById('add-worker');
    let budgetForSalaryElement = document.getElementById('sum');

    let totalNeededBudget = 0;

    hireWorkerBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        let firstNameInputElement = document.getElementById('fname');
        let lastNameInputElement = document.getElementById('lname');
        let emailInputElement = document.getElementById('email');
        let birthInputElement = document.getElementById('birth');
        let positionInputElement = document.getElementById('position');
        let salaryInputElement = document.getElementById('salary');

        let formDataArray = [ firstNameInputElement.value, lastNameInputElement.value,
                              emailInputElement.value, birthInputElement.value, 
                              positionInputElement.value, salaryInputElement.value];

        if(formDataArray.some(el => el.length === 0)){
            return;
        }

        let trElement = document.createElement('tr');

        formDataArray.forEach(el => {
            let tdElement = document.createElement('td');
            tdElement.textContent = el;
            trElement.appendChild(tdElement);
        });

        let tdForButtons = document.createElement('td');

        let firedBtnElement = document.createElement('button');
        firedBtnElement.classList.add('fired');
        firedBtnElement.textContent = 'Fired';

        let editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit');
        editBtnElement.textContent = 'Edit';

        tdForButtons.appendChild(firedBtnElement);
        tdForButtons.appendChild(editBtnElement);

        trElement.appendChild(tdForButtons);

        tableContentElement.appendChild(trElement);

        let salary = Number(salaryInputElement.value);
        totalNeededBudget += salary;
        budgetForSalaryElement.textContent = totalNeededBudget.toFixed(2);

        formElement.reset();

        editBtnElement.addEventListener('click', (e) => {
            let trElementToDelete = e.currentTarget.parentNode.parentNode;
            tableContentElement.removeChild(trElementToDelete);

            firstNameInputElement.value = formDataArray[0];
            lastNameInputElement.value =  formDataArray[1];
            emailInputElement.value =  formDataArray[2];
            birthInputElement.value =  formDataArray[3];
            positionInputElement.value =  formDataArray[4];
            salaryInputElement.value =  formDataArray[5];

            totalNeededBudget -= salary;
            budgetForSalaryElement.textContent = totalNeededBudget.toFixed(2);
        });

        firedBtnElement.addEventListener('click', (e) => {
            let trElementToDelete = e.currentTarget.parentNode.parentNode;
            tableContentElement.removeChild(trElementToDelete);

            totalNeededBudget -= salary;
            budgetForSalaryElement.textContent = totalNeededBudget.toFixed(2);
        });
    });
}

solve();