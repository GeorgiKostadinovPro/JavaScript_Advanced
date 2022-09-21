function solve(carArgsObj){
    let carObj = { model: carArgsObj.model };

    function getEngine(power){
        if(power <= 90){
            return { power: 90, volume: 1800 };
        }else if(power <= 120){
            return { power: 120, volume: 2400 };
        }else if(power <= 200){
            return { power: 200, volume: 3500 };
        }
    }

    carObj.engine = getEngine(carArgsObj.power);
    carObj.carriage = { 
        type: carArgsObj.carriage, 
        color: carArgsObj.color 
    }

    let carWheelSize = carArgsObj.wheelsize % 2 == 0 
                       ? carArgsObj.wheelsize - 1
                       : carArgsObj.wheelsize;

    carObj.wheels = new Array(4).fill(carWheelSize);

    return carObj;
}

solve({ model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14 });