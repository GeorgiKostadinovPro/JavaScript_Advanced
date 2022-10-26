window.addEventListener("load", solve);

function solve() {

  let publishBtnElement = document.getElementById('publish');
  let tableBodyElement = document.getElementById('table-body');
  let carsListElement = document.getElementById('cars-list');
  let profitStrongElement = document.getElementById('profit'); 

  let totalProfit = 0;

  publishBtnElement.addEventListener('click', (e) => {
     e.preventDefault();

     let makeInputElement = document.getElementById('make');
     let modelInputElement = document.getElementById('model');
     let productionYearInputElement = document.getElementById('year');
     let fuelTypeInputElement = document.getElementById('fuel');
     let originalCostInputElement = document.getElementById('original-cost');
     let sellingPriceInputElement = document.getElementById('selling-price');

     if(makeInputElement.value.length == 0 || modelInputElement.value.length == 0 
      || productionYearInputElement.value.length == 0 || fuelTypeInputElement.value.length == 0 
      || originalCostInputElement.value.length == 0 || sellingPriceInputElement.value.length == 0 
      || Number(originalCostInputElement.value) >= Number(sellingPriceInputElement.value)){
          return;
     }
     
     let valuesArray = [ makeInputElement.value, modelInputElement.value, 
      productionYearInputElement.value, fuelTypeInputElement.value, 
      originalCostInputElement.value, sellingPriceInputElement.value];

     let trElement = document.createElement('tr');
     trElement.classList.add('row');

     for (const value of valuesArray) {
      
      let tdElement = document.createElement('td');
      tdElement.textContent = value;
      trElement.appendChild(tdElement);
     }
     
     let tdForButtons = document.createElement('td');

     let editBtnElement = document.createElement('button');
     editBtnElement.classList.add('action-btn');
     editBtnElement.classList.add('edit');
     editBtnElement.textContent = 'Edit';

     let sellBtnElement = document.createElement('button');
     sellBtnElement.classList.add('action-btn');
     sellBtnElement.classList.add('sell');
     sellBtnElement.textContent = 'Sell';

     tdForButtons.appendChild(editBtnElement);
     tdForButtons.appendChild(sellBtnElement);

     trElement.appendChild(tdForButtons);
     tableBodyElement.appendChild(trElement);

     makeInputElement.value = '';
     modelInputElement.value = '';
     productionYearInputElement.value = '';
     fuelTypeInputElement.value = '';
     originalCostInputElement.value = '';
     sellingPriceInputElement.value = '';

     editBtnElement.addEventListener('click', (e) => {
         editButtonTrElement = e.currentTarget.parentNode.parentNode;
         tableBodyElement.removeChild(editButtonTrElement);

         makeInputElement.value = valuesArray[0];
         modelInputElement.value = valuesArray[1];
         productionYearInputElement.value = valuesArray[2];
         fuelTypeInputElement.value = valuesArray[3];
         originalCostInputElement.value = valuesArray[4];
         sellingPriceInputElement.value = valuesArray[5];
     });

     sellBtnElement.addEventListener('click', (e) => {
        sellButtonTrElement = e.currentTarget.parentNode.parentNode;
        tableBodyElement.removeChild(sellButtonTrElement);

        let liElement = document.createElement('li');
        liElement.classList.add('each-list');

        let firstSpanElement = document.createElement('span');
        firstSpanElement.textContent = valuesArray[0] + ' ' + valuesArray[1];

        let secondSpanElement = document.createElement('span');
        secondSpanElement.textContent = valuesArray[2];

        let thirdSpanElement = document.createElement('span');
        thirdSpanElement.textContent = Number(valuesArray[5]) - Number(valuesArray[4]);

        liElement.appendChild(firstSpanElement);
        liElement.appendChild(secondSpanElement);
        liElement.appendChild(thirdSpanElement);

        carsListElement.appendChild(liElement);

        totalProfit += Number(thirdSpanElement.textContent);
        profitStrongElement.textContent = totalProfit.toFixed(2);
     });
  });
}
