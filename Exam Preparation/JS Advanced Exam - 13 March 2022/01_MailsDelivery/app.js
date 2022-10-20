function solve() {
   let mailsListElement = document.getElementById('list');
   let sentListElement = document.querySelector('.sent-list');
   let deleteListElement = document.querySelector('.delete-list');
   let addBtnElement = document.getElementById('add');
   let resetBtnElement = document.getElementById('reset');
   
   let recipientNameInputElement = document.getElementById('recipientName');
   let titleInputElement = document.getElementById('title');
   let messageTextareaElement = document.getElementById('message'); 

   addBtnElement.addEventListener('click', (e) => {
     e.preventDefault();

     if(!recipientNameInputElement.value || !titleInputElement.value || !messageTextareaElement){
        return;
     }

     let currentInputData = [recipientNameInputElement.value, titleInputElement.value, messageTextareaElement.value];

    let liElement = document.createElement('li');

    let titleH4Element = document.createElement('h4');
    titleH4Element.textContent = `Title: ${titleInputElement.value}`;

    let recipientNameH4Element = document.createElement('h4');
    recipientNameH4Element.textContent = `Recipient Name: ${recipientNameInputElement.value}`;

    let messageSpanElement = document.createElement('span');
    messageSpanElement.textContent = messageTextareaElement.value;

    liElement.appendChild(titleH4Element);
    liElement.appendChild(recipientNameH4Element);
    liElement.appendChild(messageSpanElement);

    let divForButtons = document.createElement('div');
    divForButtons.id = 'list-action';

    let sendBtnElement = document.createElement('button');
    sendBtnElement.id = 'send';
    sendBtnElement.type = 'submit';
    sendBtnElement.textContent = 'Send';

    let deleteBtnElement = document.createElement('button');
    deleteBtnElement.id = 'delete';
    deleteBtnElement.type = 'submit';
    deleteBtnElement.textContent = 'Delete';

    divForButtons.appendChild(sendBtnElement);
    divForButtons.appendChild(deleteBtnElement);

    liElement.appendChild(divForButtons);
    mailsListElement.appendChild(liElement);

    recipientNameInputElement.value = '';
    titleInputElement.value = '';
    messageTextareaElement.value = '';

    sendBtnElement.addEventListener('click', (e) => {
        let liToDelete = e.currentTarget.parentNode.parentNode;
        mailsListElement.removeChild(liToDelete);

        let sentLiElement = document.createElement('li');

        let toSpanElement = document.createElement('span');
        toSpanElement.textContent = `To: ${currentInputData[1]}`;

        let titleSpanElement = document.createElement('span');
        titleSpanElement.textContent = `Title: ${currentInputData[2]}`;

        sentLiElement.appendChild(toSpanElement);
        sentLiElement.appendChild(titleSpanElement);

        let divForButtonsInSentListLi = document.createElement('div');
        divForButtonsInSentListLi.classList.add('btn');
        
        let deleteBtnElementInSentListLi = document.createElement('button');
        deleteBtnElementInSentListLi.classList.add('delete');
        deleteBtnElementInSentListLi.type = 'submit';
        deleteBtnElementInSentListLi.textContent = 'Delete';

        divForButtonsInSentListLi.appendChild(deleteBtnElementInSentListLi);
        sentLiElement.appendChild(divForButtonsInSentListLi);

        sentListElement.appendChild(sentLiElement);

        deleteBtnElementInSentListLi.addEventListener('click', (e) => {
            let liToDelete = e.currentTarget.parentNode.parentNode;
            sentListElement.removeChild(liToDelete);

            let deleteLiElement = document.createElement('li');

            deleteLiElement.appendChild(toSpanElement);
            deleteLiElement.appendChild(titleSpanElement);

            deleteListElement.appendChild(deleteLiElement);
        });
    })

    deleteBtnElement.addEventListener('click', (e) => {
        let liToDelete = e.currentTarget.parentNode.parentNode;
        mailsListElement.removeChild(liToDelete);

        let deleteLiElement = document.createElement('li');

        let toSpanElement = document.createElement('span');
        toSpanElement.textContent = `To: ${currentInputData[1]}`;

        let titleSpanElement = document.createElement('span');
        titleSpanElement.textContent = `Title: ${currentInputData[2]}`;

        deleteLiElement.appendChild(toSpanElement);
        deleteLiElement.appendChild(titleSpanElement);

        deleteListElement.appendChild(deleteLiElement);
    });
   });

   resetBtnElement.addEventListener('click', (e) => {
     e.preventDefault();

     recipientNameInputElement.value = '';
     titleInputElement.value = '';
     messageTextareaElement.value = '';
   });
}

solve()