function search() {
   let liElements = Array.from(document.querySelectorAll('#towns li'));
   let searchInputElement = document.getElementById('searchText');
   let resultDivElement = document.getElementById('result');
   let matches = 0;

   liElements.filter(x => x.textContent.includes(searchInputElement.value))
   .forEach(el => {
      el.style.fontWeight = 'bold';
      el.style.textDecoration = 'underline';
      matches++;
   });

   resultDivElement.textContent = `${matches} matches found`;
}