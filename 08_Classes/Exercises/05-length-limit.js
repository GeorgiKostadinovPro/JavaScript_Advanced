class Stringer {
    constructor(value, length){
        this.innerString = value;
        this.innerLength = length;
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        let decreasedLength = this.innerLength - length;

        if(decreasedLength < 0){
            this.innerLength = 0;
            return;
        }

        this.innerLength = decreasedLength;
    }

    toString(){
        if(this.innerLength === 0){
            return '...';
        }else if(this.innerLength < this.innerString.length){
            return this.innerString.substring(0, this.innerLength) + '...';
        }else{
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test