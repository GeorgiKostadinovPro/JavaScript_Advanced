function createPerson(firstName, lastName){
    return {
        firstName,
        lastName,
        
        get fullName(){
            return this.firstName + ' ' + this.lastName;
        },

        set fullName(value){
            let [newFirstName, newLastName] = value.split(' ');
            this.firstName = newFirstName;
            this.lastName = newLastName;
        }
    };
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.firstName);
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla