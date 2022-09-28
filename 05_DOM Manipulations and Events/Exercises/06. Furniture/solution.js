function solve() {
  let [generateBtnElement, buyBtnElement] = document.querySelectorAll('button');
  let [generateFurnitureTextareaElement, buyFurnitureTextareaElement]
   = document.querySelectorAll('textarea');
  let tbodyElement= document.querySelector('.table tbody');

  let boughtFurniture = [];

  generateBtnElement.addEventListener('click', (e) => {
      let furniture = JSON.parse(generateFurnitureTextareaElement.value);
      
      furniture.forEach(el => {
        let entries = Object.entries(el);

        let trElement = `<tr>
                    <td><img src="${entries[1][1]}"></td>
                    <td><p>${entries[0][1]}</p></td>
                    <td><p>${entries[2][1]}</p></td>
                    <td><p>${entries[3][1]}</p></td>
                    <td><input type="checkbox" /></td>
                  </tr>`;
        
        tbodyElement.innerHTML += trElement;
    });
  });

  buyBtnElement.addEventListener('click', (e) => {
    let checkedInputCheckboxElements = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));

    checkedInputCheckboxElements.forEach(el => {
      let [furnitureNamePElement, furniturePricePElement, furnitureDecFactorPElement] 
      = el.parentNode.parentNode.querySelectorAll('p');

      let currFurnitureObj = {
        name: furnitureNamePElement.textContent,
        price: Number(furniturePricePElement.textContent),
        decFactor: Number(furnitureDecFactorPElement.textContent)
      };  

      boughtFurniture.push(currFurnitureObj);
    });

    let boughtFurnitureNames = boughtFurniture.map(x => x.name).join(', ');
    let totalPrice = boughtFurniture.reduce((acc, x) => acc + x.price, 0);
    let averageDecFactor = boughtFurniture.reduce((acc, x) => acc + x.decFactor, 0) / boughtFurniture.length;

    buyFurnitureTextareaElement.value += `Bought furniture: ${boughtFurnitureNames}\n`;
    buyFurnitureTextareaElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyFurnitureTextareaElement.value += `Average decoration factor: ${averageDecFactor}`;
  });
}