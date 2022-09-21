function solve(array){
    let heroicInventory = [];

    array.forEach(el => {
        let [name, level, heroItems] = el.split(' / ');
        let items = heroItems ? heroItems.split(', ') : '';
        let heroObj = { name, level: Number(level) };

        heroObj.items = items ? items : [];

        heroicInventory.push(heroObj);
    });

    return JSON.stringify(heroicInventory);
}

solve(['Isacc / 25 / ',
       'Derek / 12 / BarrelVest, DestructionSword',
       'Hes / 1 / Desolator, Sentinel, Antara']);