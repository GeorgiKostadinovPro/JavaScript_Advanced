function solve(array){
    let cities = [];
    
    array.shift();

    array.forEach(el => {
        let [cityName, cityLatitude, cityLongitude] = el.split(' | ');
       
        cityName = cityName.substring(2);
        cityLongitude = cityLongitude.substring(0, cityLongitude.length - 2);

        let cityObj = {
            Town: cityName,
            Latitude: Number(Number(cityLatitude).toFixed(2)),
            Longitude: Number(Number(cityLongitude).toFixed(2))
        };

        cities.push(cityObj);
    });

    return JSON.stringify(cities);
}

solve(['| Town | Latitude | Longitude |',
       '| Sofia | 42.696552 | 23.32601 |',
       '| Beijing | 39.913818 | 116.363625 |']);