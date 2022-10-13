class Textbox {
    constructor(selector, regex){
        this._value = '';
        this._invalidSymbols = regex;
        this._elements = document.querySelectorAll(selector);
        this._elements[0].addEventListener('change', (e) => { 
            this._value = e.currentTarget.value;
            this._elements[1].value = this._value;
        });
    }

    get value(){
        return this._value;
    }

    set value(str){
        this._value = str;
        
        Array.from(this._elements).forEach(el => {
            el.value = this._value;
        });
    }

    get elements(){
        return this._elements;
    }

    isValid(){
        if(this._value.match(this._invalidSymbols)){
            return false;
        }

        return true;
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');

Array.from(inputs).forEach(el => {
    el.addEventListener('click', function() {
        console.log(textbox.value);
    });
});
