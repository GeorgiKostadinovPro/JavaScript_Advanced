function create(words) {
   let contentDivElement = document.getElementById('content');

   words.forEach(word => {
      let wordDivElement = document.createElement('div');
      let wordPElement = document.createElement('p');
      wordPElement.textContent = word;
      wordPElement.style.display = 'none';

      wordDivElement.appendChild(wordPElement);
      contentDivElement.appendChild(wordDivElement);

      wordDivElement.addEventListener('click', (e) => {
         wordPElement.style.display = 'inline-block';
      });
   });
}