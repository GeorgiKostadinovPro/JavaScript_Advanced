window.addEventListener("load", solve);

function solve(){
    let formElement = document.querySelector('#right form');
    let sendFormBtnElement = document.querySelector('#right form button[type="submit"]');
    let receivedOrdersSectionElement = document.getElementById('received-orders');
    let completedOrdersSectionElement = document.getElementById('completed-orders');
    let cleanBtnElement = document.querySelector('#completed-orders .clear-btn');

    sendFormBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        let productTypeSelectElement = document.getElementById('type-product');
        let descriptionTextareaElement = document.getElementById('description');
        let clientNameInputElement = document.getElementById('client-name');
        let clientPhoneInputElement = document.getElementById('client-phone');

        let formElements = [ productTypeSelectElement, descriptionTextareaElement, 
            clientNameInputElement, clientPhoneInputElement ];

        if(formElements.some(x => x.value === '')){
            return;
        }

        let containerDivElement = document.createElement('div');
        containerDivElement.classList.add('container');

        let productTypeH2Element = document.createElement('h2');
        productTypeH2Element.textContent = `Product type for repair: ${productTypeSelectElement.value}`;

        let clientInformationH3Element = document.createElement('h3');
        clientInformationH3Element.textContent 
        = `Client information: ${clientNameInputElement.value}, ${clientPhoneInputElement.value}`;

        let descriptionH4Element = document.createElement('h4');
        descriptionH4Element.textContent = `Description of the problem: ${descriptionTextareaElement.value}`;

        let startRepaitBtnElement = document.createElement('button');
        startRepaitBtnElement.classList.add('start-btn');
        startRepaitBtnElement.textContent = 'Start repair';

        let finishRepaitBtnElement = document.createElement('button');
        finishRepaitBtnElement.classList.add('finish-btn');
        finishRepaitBtnElement.textContent = 'Finish repair';
        finishRepaitBtnElement.disabled = true;

        containerDivElement.appendChild(productTypeH2Element);
        containerDivElement.appendChild(clientInformationH3Element);
        containerDivElement.appendChild(descriptionH4Element);
        containerDivElement.appendChild(startRepaitBtnElement);
        containerDivElement.appendChild(finishRepaitBtnElement);

        receivedOrdersSectionElement.appendChild(containerDivElement);

        startRepaitBtnElement.addEventListener('click', (e) => {
            e.currentTarget.disabled = true;
            finishRepaitBtnElement.disabled = false;

        });

        finishRepaitBtnElement.addEventListener('click', (e) => {
            let containerDivElementToRemove = e.currentTarget.parentNode;
            receivedOrdersSectionElement.removeChild(containerDivElementToRemove);

            containerDivElementToRemove.removeChild(startRepaitBtnElement);
            containerDivElementToRemove.removeChild(finishRepaitBtnElement);

            completedOrdersSectionElement.appendChild(containerDivElementToRemove);
        });

        formElement.reset();
    });

    cleanBtnElement.addEventListener('click', (e) => {
        let completedOdrdersElementsToRemove = Array.from(e.currentTarget.parentNode
        .querySelectorAll('.container'));

        completedOdrdersElementsToRemove.forEach(el => {
            completedOrdersSectionElement.removeChild(el);
        });
    });
}