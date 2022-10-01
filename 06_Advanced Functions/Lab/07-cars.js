function solve(input) {
    const dataObj = {};

    const carsManipulatorObj = {
        create: (n, inherits, n2) =>
            (dataObj[n] = inherits ? Object.create(dataObj[n2]) : {}),
        set: (n, k, v) => (dataObj[n][k] = v),
        print: n => {
            const result = [];
            for (const key in dataObj[n]) {
                result.push(`${key}:${dataObj[n][key]}`);
            }

            console.log(result.join(','));
        },
    };

    input.forEach(x => {
        const [c, n, k, v] = x.split(' ');
        
        carsManipulatorObj[c](n, k, v)
    });
}

solve(['create c1',
       'create c2 inherit c1',
       'set c1 color red',
       'set c2 model new',
       'print c1',
       'print c2']);