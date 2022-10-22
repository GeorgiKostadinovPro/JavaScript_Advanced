window.addEventListener("load", solve);

function solve(){
  let mainDivElement = document.getElementById('main');
  let formElement = document.querySelector('form');
  let publishBtnElement = document.getElementById('form-btn');
  let previewListElement = document.getElementById('preview-list');

  publishBtnElement.addEventListener('click', (e) => {
      let firstNameInputElement = document.getElementById('first-name');
      let lastNameInputElement = document.getElementById('last-name');
      let ageInputElement = document.getElementById('age');
      let storyTitleInputElement = document.getElementById('story-title');
      let genreSelectElement = document.getElementById('genre');
      let storyTextareaElement = document.getElementById('story');

      let inputFieldValues = [firstNameInputElement.value, lastNameInputElement.value, 
        ageInputElement.value, storyTitleInputElement.value, genreSelectElement.value, storyTextareaElement.value];

      if(inputFieldValues.some(x => x === '') || Number(ageInputElement.value) <= 0){
        return;
      }

      let storyLiElement = document.createElement('li');
      storyLiElement.classList.add('story-info');

      let storyArticleElement = document.createElement('article');
      let nameH4Element = document.createElement('h4');
      nameH4Element.textContent = `Name: ${firstNameInputElement.value} ${lastNameInputElement.value}`;

      let agePElement = document.createElement('p');
      agePElement.textContent = `Age: ${ageInputElement.value}`;

      let titlePElement = document.createElement('p');
      titlePElement.textContent = `Title: ${storyTitleInputElement.value}`;

      let genrePElement = document.createElement('p');
      genrePElement.textContent = `Genre: ${genreSelectElement.value}`;

      let storyPElement = document.createElement('p');
      storyPElement.textContent = storyTextareaElement.value;

      storyArticleElement.appendChild(nameH4Element);
      storyArticleElement.appendChild(agePElement);
      storyArticleElement.appendChild(titlePElement);
      storyArticleElement.appendChild(genrePElement);
      storyArticleElement.appendChild(storyPElement);

      let saveStoryBtnElement = document.createElement('button');
      saveStoryBtnElement.classList.add('save-btn');
      saveStoryBtnElement.textContent = 'Save Story';

      let editStoryBtnElement = document.createElement('button');
      editStoryBtnElement.classList.add('edit-btn');
      editStoryBtnElement.textContent = 'Edit Story';

      let deleteStoryBtnElement = document.createElement('button');
      deleteStoryBtnElement.classList.add('delete-btn');
      deleteStoryBtnElement.textContent = 'Delete Story';

      storyLiElement.appendChild(storyArticleElement);
      storyLiElement.appendChild(saveStoryBtnElement);
      storyLiElement.appendChild(editStoryBtnElement);
      storyLiElement.appendChild(deleteStoryBtnElement);
      previewListElement.appendChild(storyLiElement);

      formElement.reset();
      e.currentTarget.disabled = true;

      saveStoryBtnElement.addEventListener('click', (e) => {
          mainDivElement.innerHTML = '';

          let h1Element = document.createElement('h1');
          h1Element.textContent = 'Your scary story is saved!';

          mainDivElement.appendChild(h1Element);
      }); 

      editStoryBtnElement.addEventListener('click', (e) => {
          let liElementToEdit = e.currentTarget.parentNode;
          previewListElement.removeChild(liElementToEdit);

          firstNameInputElement.value = inputFieldValues[0];
          lastNameInputElement.value = inputFieldValues[1];
          ageInputElement.value = inputFieldValues[2];
          storyTitleInputElement.value = inputFieldValues[3];
          genreSelectElement.value = inputFieldValues[4];
          storyTextareaElement.value = inputFieldValues[5];

          publishBtnElement.disabled = false;
      });

      deleteStoryBtnElement.addEventListener('click', (e) => {
          let liElementToRemove = e.currentTarget.parentNode;
          previewListElement.removeChild(liElementToRemove);

          publishBtnElement.disabled = false;
      });
  });
}