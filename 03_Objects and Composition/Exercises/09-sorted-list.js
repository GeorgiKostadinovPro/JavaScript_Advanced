function createSortedList(){
    let items = [];

    return {
        add(element){
            items.push(element);
            items.sort((a, b) => a - b);
        },

        remove(index){
            if(index < 0 || index > this.size){
                throw new Error('Index is out of range!');
            }

            items.splice(index, 1);
        },

        get(index){
            if(index < 0 || index > this.size){
                throw new Error('Index is out of range!');
            }
            
            return items[index];
        },

        get size(){
            return items.length;
        }
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7); 
console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1));