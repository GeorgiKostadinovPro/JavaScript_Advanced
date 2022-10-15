function solve(){
    class Figure {
        constructor(){
            this.units = 'cm';
        }

        get area(){
            return this._area;
        }

        changeUnits(value){
            if (value !== 'm' && value !== 'cm' && value !== 'mm'){
                return;
            }
            
            this.units = value;
        }

        toString(){
            return `Figures units: ${this.units}`;
        } 
    }

    class Circle extends Figure {
        constructor(radius){
            super();

            this._radius = radius;
        }

        get area(){
            return Math.PI * this.radius ** 2;
        }

        get radius(){
            if(this.units === 'm'){
                return this._radius / 100;
            }else if(this.units === 'cm'){
                return this._radius;
            }else if(this.units === 'mm'){
                return this._radius * 10;
            }
        }

        toString(){
            let result = super.toString();
            return result + ` Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units){
            super();

            this._width = width;
            this._height = height;
            this.units = units;
        }

        get area(){
            return this.width * this.height;
        }

        get width() { 
            if(this.units === 'm'){
                return this._width / 100;
            }else if(this.units === 'cm'){
                return this._width;
            }else if(this.units === 'mm'){
                return this._width * 10;
            }
        }
        
        get height() {
            if(this.units === 'm'){
                return this._height / 100;
            }else if(this.units === 'cm'){
                return this._height;
            }else if(this.units === 'mm'){
                return this._height * 10;
            }
        }

        toString(){
            let result = super.toString();
            return result + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}

let classes = solve();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50