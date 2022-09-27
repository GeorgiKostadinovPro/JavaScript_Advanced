function lockedProfile() {
    let showMoreButtonElements = Array.from(document.getElementsByTagName('button'));

    showMoreButtonElements.forEach(el => {
        el.addEventListener('click', (e) => {
            let currProfileDivElement = e.currentTarget.parentNode;
            let lockInputRadioElement = currProfileDivElement.querySelector('input[value="lock"]');

            if(lockInputRadioElement.checked){
                return;
            }
            
            let hiddenInformationDivElement = currProfileDivElement.querySelector('div');

            if(e.currentTarget.textContent === 'Show more'){
                hiddenInformationDivElement.style.display = 'inline-block';
                 e.currentTarget.textContent = 'Hide it'; 
            }else{
                hiddenInformationDivElement.style.display = 'none';
                e.currentTarget.textContent = 'Show more'; 
            }
        });
    });
}