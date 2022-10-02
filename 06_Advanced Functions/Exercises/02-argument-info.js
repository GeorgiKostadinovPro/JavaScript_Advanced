function solve(...args){
    let resultObj = {};

    Array.from(args).forEach(arg => {
        let argType = typeof arg;
        console.log(`${argType}: ${arg}`);

        if(!resultObj.hasOwnProperty(argType)){
            resultObj[argType] = 0;
        }

        resultObj[argType]++;
    });

    Object.entries(resultObj)
    .sort((a, b) => b[1] - a[1])
    .forEach(el => {
        console.log(`${el[0]} = ${el[1]}`);
    });
}

solve('cat', 42, function () { console.log('Hello world!'); });