function solve(speed, area){
    let speedLimit = 0;

    if(area === 'motorway'){
        speedLimit = 130;
    }else if(area === 'interstate'){
        speedLimit = 90;
    }else if(area === 'city'){
        speedLimit = 50;
    }else if(area == 'residential'){
        speedLimit = 20;
    }

    if(speed <= speedLimit){
       console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
       return;
    }

    let status = '';
    let difference = speed - speedLimit;

    if(difference <= 20){
        status = 'speeding';
    }else if(difference > 20 && difference <= 40){
        status = 'excessive speeding';
    }else{
        status = 'reckless driving';
    }

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');