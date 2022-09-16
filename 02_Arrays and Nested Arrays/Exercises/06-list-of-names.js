function solve(names){
    let position = 1;
    
    names
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .forEach(el => {
        console.log(`${position}.${el}`);
        position++;
    });
}

solve(["John", "Bob", "Christina", "Ema"]);