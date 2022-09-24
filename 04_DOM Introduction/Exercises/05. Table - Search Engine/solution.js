function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let trElements = Array.from(document.querySelectorAll('.container tbody tr'));
      let searchFieldInputElement = document.getElementById('searchField');

      trElements.forEach(el => {
         if(el.textContent.includes(searchFieldInputElement.value)){
            el.classList.add('select');
         }else{
            el.classList.remove('select');
         }
      });

      searchFieldInputElement.value = '';
   }
}