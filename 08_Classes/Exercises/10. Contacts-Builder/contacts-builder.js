class Contact {
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online(){
        return this._online;
    }

    set online(value){
        this._online = value;

        if(this.title){
            if(this.online === true){
                this.title.classList.add('online');
            }else{
                this.title.classList.remove('online');
            }
        }
    }

    render(id){
        let mainDivElement = document.getElementById(id);

        let articleElement = document.createElement('article');
        let titleDivElement = document.createElement('div');
        titleDivElement.classList.add('title');
        titleDivElement.textContent = this.firstName + ' ' + this.lastName;
        let buttonElement = document.createElement('button');
        buttonElement.textContent = '\u2139';
        titleDivElement.appendChild(buttonElement);
        
        let infoDivElement = document.createElement('div');
        infoDivElement.classList.add('info');
        infoDivElement.style.display = 'none';
        let phoneSpanElement = document.createElement('span');
        phoneSpanElement.textContent = '\u260E' + ' ' + this.phone;
        let emailSpanElement = document.createElement('span');
        emailSpanElement.textContent =  '\u2709' + ' ' + this.email;
        infoDivElement.appendChild(phoneSpanElement);
        infoDivElement.appendChild(emailSpanElement);

        articleElement.appendChild(titleDivElement);
        articleElement.appendChild(infoDivElement);
        mainDivElement.appendChild(articleElement);
        
        this.title = articleElement.querySelector('.title');

        if(this._online){
            this.title.classList.add('online');
        }

        buttonElement.addEventListener('click', (e) => {
            let infoDivElementToShow = e.currentTarget.parentNode.parentNode
            .querySelector('.info');

            if(infoDivElementToShow.style.display === 'none'){
                infoDivElementToShow.style.display = 'block';
            }else{
                infoDivElementToShow.style.display = 'none';
            }
        });
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"), 
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")];
    
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);