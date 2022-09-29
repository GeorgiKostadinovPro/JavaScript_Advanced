function solve() {
  let sectionElements = Array.from(document.querySelectorAll('#quizzie section'));
  let answerDivElements = Array.from(document.querySelectorAll('.answer-wrap'));
  let resultsUlElement = document.getElementById('results');
  let rightAnswers = 3;
  let currSectionPos = 0;

  sectionElements.push(resultsUlElement);

  function changeSections(fromSection, toSection){
    fromSection.style.display = 'none';
    toSection.style.display = 'block';
  }

  answerDivElements.forEach(el => {
    el.addEventListener('click', (e) => {
      let pElement = e.currentTarget.querySelector('p');
      let answerText = pElement.textContent;
      let h1Element = resultsUlElement.querySelector('h1');

      if(answerText !== 'onclick' 
      && answerText !== 'JSON.stringify()'
      && answerText !== 'A programming API for HTML and XML documents'){
        rightAnswers--;
      }

      changeSections(sectionElements[currSectionPos], sectionElements[currSectionPos + 1]);

      if(currSectionPos === sectionElements.length - 2){
        if(rightAnswers === 3){
          h1Element.textContent = 'You are recognized as top JavaScript fan!';
        }else{
          h1Element.textContent = `You have ${rightAnswers} right answers`;
        }

        return;
      }
      currSectionPos++;
    });
  });
}