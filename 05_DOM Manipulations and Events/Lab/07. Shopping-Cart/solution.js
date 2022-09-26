function solve() {
   let addButtonElements = Array.from(document.querySelectorAll('.add-product'));
   let textAreaElement = document.querySelector('textarea');
   let checkOutButtonElement = document.querySelector('.checkout');
   let productsBought = [];

   addButtonElements.forEach(el => {
      el.addEventListener('click', (e) => {
         let currProductDivElement = e.currentTarget.parentNode.parentNode;
         let [currProductNameDiv, currProductPriceDiv] = currProductDivElement
         .querySelectorAll('.product-title, .product-line-price');
        
         let currProductName = currProductNameDiv.textContent;
         let currProductPrice = Number(currProductPriceDiv.textContent);
         
         textAreaElement.textContent += `Added ${currProductName} for ${currProductPrice.toFixed(2)} to the cart.\n`;

         let currProductObj = productsBought.find(x => x.name === currProductName);

         if(currProductObj){
            currProductObj.price += currProductPrice;
            return;
         }

         currProductObj = { name: currProductName, 
                            price: currProductPrice };
                            
         productsBought.push(currProductObj);
      });
   });

   checkOutButtonElement.addEventListener('click', (e) => {
      let productsList = productsBought.map(x => x.name).join(', ');
      let totalPrice = productsBought.reduce((acc, x) => acc + x.price, 0);

      textAreaElement.textContent += `You bought ${productsList} for ${totalPrice.toFixed(2)}.`;
      addButtonElements.forEach(el => el.disabled = true);
      e.target.disabled = true;
   });
}