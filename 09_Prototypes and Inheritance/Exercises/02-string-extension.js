(function solve(){
    String.prototype.ensureStart = function(str){
        if(!this.startsWith(str)){
            return str + this;
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function(str){
        if(!this.endsWith(str)){
            return this + str;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function(){
        return this.length === 0 ? true : false;
    };

    String.prototype.truncate = function(n){
        if(this.length <= n){
            return this.toString();
        }

        if(n < 4){
            return '.'.repeat(4);
        }

        let result = this.split(' ');
        while ((result.join(' ') + '...').length > n) {
            if (result.length > 1) {
                result.pop();
            } else {
                result[0] = result[0].slice(0, n - 3)
            }
        }
        
        return result.join(' ').trim() + '...';
    };

    String.format = function(string, ...params){
        params.forEach((word, i) => {
            string = string.replace(`{${i}}`.toString(), word);
        });

        return string;
    };
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox', 'quick', 'brown');
str = String.format('jumps {0} {1}', 'dog');