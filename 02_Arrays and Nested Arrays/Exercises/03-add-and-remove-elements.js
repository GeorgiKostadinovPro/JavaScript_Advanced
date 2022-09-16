function solve(commands){
    let startingNum = 0;
    let result = [];

    commands.forEach(cmd => {
        startingNum++;
        if(cmd === 'add'){
            result.push(startingNum);
        }else{
            result.pop();
        }
    });

    let output = result.length > 0 
    ? result.join('\n') 
    : 'Empty';
    
    console.log(output);
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);