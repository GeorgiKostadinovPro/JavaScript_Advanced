function solve(text){
    const regex = /\w+/gm;

    let words = text.toUpperCase()
    .match(regex)
    .join(', ')

    console.log(words);
}

solve('Hi, how are you?');