function solve(array){
    let registry = {};

    array.forEach(el => {
        let [city, population] = [...el.split(' <-> ')];

        if(!registry.hasOwnProperty(city)){
            registry[city] = 0;
        }

        registry[city] += Number(population);
    });

    for (const key in registry) {
        console.log(`${key} : ${registry[key]}`);
    }
}

solve(['Sofia <-> 1200000',
       'Montana <-> 20000',
       'New York <-> 10000000',
       'Washington <-> 2345000',
       'Las Vegas <-> 1000000']);