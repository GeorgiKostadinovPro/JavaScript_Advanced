function solve() {
    let textareaElement = document.getElementById('input');
    let resultDivElement = document.getElementById('output');
  
    let sentences = textareaElement.value
    .match(/[^.]+./gm)
    .map(x => x.trim());

    for (let i = 0; i < sentences.length; i+=3) {
      let pElement = document.createElement('p');
      let currSentences = [sentences[i], sentences[i + 1], sentences[i + 2]];
      currSentences = currSentences.filter(x => x !== undefined).join('');

      pElement.textContent = currSentences;
      resultDivElement.appendChild(pElement);
    }
}