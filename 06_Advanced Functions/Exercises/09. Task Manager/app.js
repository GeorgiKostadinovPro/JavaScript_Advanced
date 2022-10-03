function solve() {
    let formElement = document.querySelector('form');
    let openDivElement = document.querySelector('section:nth-child(2) div:nth-child(2)');
    let inProgressDivElement = document.getElementById('in-progress');
    let completeDivElement = document.querySelector('section:nth-child(4) div:nth-child(2)');
    let addBtnElement = document.getElementById('add');

    addBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        let [taskInputElement, descriptionTextareaElement, dateInputElement] 
         = document.querySelectorAll('form input, textarea');

         if(!taskInputElement.value 
            || !descriptionTextareaElement.value 
            || !dateInputElement.value){
                return;
         }

         let currArticleElement = document.createElement('article');

         let h3Element = document.createElement('h3');
         h3Element.textContent = taskInputElement.value;

         let descriptionPElement = document.createElement('p');
         descriptionPElement.textContent = `Description: ${descriptionTextareaElement.value}`;

         let datePElement = document.createElement('p');
         datePElement.textContent = `Due Date: ${dateInputElement.value}`;

         let divForButtonsElement = document.createElement('div');
         divForButtonsElement.classList.add('flex');

         let startBtnElement = document.createElement('button');
         startBtnElement.classList.add('green');
         startBtnElement.textContent = 'Start';

         let deleteBtnElement = document.createElement('button');
         deleteBtnElement.classList.add('red');
         deleteBtnElement.textContent = 'Delete';

         divForButtonsElement.appendChild(startBtnElement);
         divForButtonsElement.appendChild(deleteBtnElement);

         currArticleElement.appendChild(h3Element);
         currArticleElement.appendChild(descriptionPElement);
         currArticleElement.appendChild(datePElement);
         currArticleElement.appendChild(divForButtonsElement);

         openDivElement.appendChild(currArticleElement);

         formElement.reset();

         startBtnElement.addEventListener('click', (e) => {
            let taskToRemove = e.currentTarget.parentNode.parentNode;
            openDivElement.removeChild(taskToRemove);

            startBtnElement.remove();
            deleteBtnElement.remove();
            
            let finishBtnElement = document.createElement('button');
            finishBtnElement.classList.add('orange');
            finishBtnElement.textContent = 'Finish';   

            divForButtonsElement.appendChild(deleteBtnElement);
            divForButtonsElement.appendChild(finishBtnElement);

            inProgressDivElement.appendChild(taskToRemove);

            finishBtnElement.addEventListener('click', (e) => {
                let taskToMove= e.currentTarget.parentNode.parentNode;
                inProgressDivElement.removeChild(taskToMove);
                divForButtonsElement.remove();
                
                completeDivElement.appendChild(taskToMove);
            });
         });

         deleteBtnElement.addEventListener('click', (e) => {
            let taskToDelete = e.currentTarget.parentNode.parentNode;
            taskToDelete.remove();
         });
    });
}