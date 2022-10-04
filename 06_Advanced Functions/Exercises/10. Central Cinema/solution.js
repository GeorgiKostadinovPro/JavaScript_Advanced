function solve() {
    let formElement = document.getElementById('add-new');
    let moviesUlElement = document.querySelector('#movies ul');
    let archiveUlElement = document.querySelector('#archive ul');
    let onScreenBtnElement = document.querySelector('#container button');
    let clearBtnElement = document.querySelector('#archive button');

    onScreenBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        let [nameInputElement, hallInputElement, ticketPriceInputElement] 
        = e.currentTarget.parentNode.querySelectorAll('input');

        if(!nameInputElement.value
            || !hallInputElement.value
            || !ticketPriceInputElement.value
            || isNaN(Number(ticketPriceInputElement.value))){
            return;
        }

        let liElement = document.createElement('li');

        let spanElement = document.createElement('span');
        spanElement.textContent = nameInputElement.value;

        let strongElement = document.createElement('strong');
        strongElement.textContent = `Hall: ${hallInputElement.value}`;

        let innerDivElement = document.createElement('div');
        let strongInDivElement = document.createElement('strong');
        strongInDivElement.textContent = Number(ticketPriceInputElement.value).toFixed(2);
        let inputInDivElement = document.createElement('input');
        inputInDivElement.placeholder = 'Tickets Sold';
        let archiveBtnElement = document.createElement('button');
        archiveBtnElement.textContent = 'Archive';

        innerDivElement.appendChild(strongInDivElement);
        innerDivElement.appendChild(inputInDivElement);
        innerDivElement.appendChild(archiveBtnElement);

        liElement.appendChild(spanElement);
        liElement.appendChild(strongElement);
        liElement.appendChild(innerDivElement);
        moviesUlElement.appendChild(liElement);

        formElement.reset();

        archiveBtnElement.addEventListener('click', (e) => {
            let ticketsCountInputElement = e.currentTarget.parentNode.querySelector('input');

            console.log(Number(ticketsCountInputElement.value));

            if(!ticketsCountInputElement.value
                || isNaN(Number(ticketsCountInputElement.value))){
                    return;
            }
            
            let ticketPrice = Number(e.currentTarget.parentNode.querySelector('strong').textContent);
            let movieLiElementToRemove = e.currentTarget.parentNode.parentNode;
            moviesUlElement.removeChild(movieLiElementToRemove);

            let archiveLiElement = document.createElement('li');
            archiveLiElement.appendChild(spanElement);
            let strongInArhiveElement = document.createElement('strong');
            let totalPrice = ticketPrice * Number(ticketsCountInputElement.value);
            strongInArhiveElement.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
            let deleteBtnElement = document.createElement('button');
            deleteBtnElement.textContent = 'Delete';

            archiveLiElement.appendChild(strongInArhiveElement);
            archiveLiElement.appendChild(deleteBtnElement);
            archiveUlElement.appendChild(archiveLiElement);

            deleteBtnElement.addEventListener('click', (e) => {
                let liElementToRemove = e.currentTarget.parentNode;
                archiveUlElement.removeChild(liElementToRemove);
            });
        });
    });

    clearBtnElement.addEventListener('click', (e) => {
        let liElements = Array.from(e.currentTarget.parentNode.querySelectorAll('li'));

        liElements.forEach(el => {
            archiveUlElement.removeChild(el);
        });
    });
}