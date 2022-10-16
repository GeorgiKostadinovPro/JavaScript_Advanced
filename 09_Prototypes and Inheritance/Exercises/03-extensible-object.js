function extensibleObject() {
    return {
        extend: function(templateObj){
            for (const key in templateObj) {
                if (Object.hasOwnProperty.call(templateObj, key)) {
                    let value = templateObj[key];

                    if(typeof value === 'function'){
                        let prototypeObj = Object.getPrototypeOf(this);
                        prototypeObj[key] = value;
                    }else{
                        this[key] = value;
                    }
                }
            }
        }
    };
}

const myObj = extensibleObject();
const template = {
    extensionMethod: function () {},
    extensionProperty: 'someString' };
    
myObj.extend(template);