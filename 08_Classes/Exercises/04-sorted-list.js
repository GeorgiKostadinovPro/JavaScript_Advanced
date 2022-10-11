class List {
    #items = [];

    constructor(){
        this.size = this.#items.length;
    }

    add(element){
        this.#items.push(element);
        this.#items.sort((a, b) => a - b);
        this.size++;
    }

    remove(index){
        if(!this.isValidIndex(index)){
            return;
        }

        this.#items.splice(index, 1);
        this.size--;
    }

    get(index){
        if(!this.isValidIndex(index)){
            return;
        }

        return this.#items[index];
    }

    isValidIndex(index){
        return index >= 0 && index < this.#items.length
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);