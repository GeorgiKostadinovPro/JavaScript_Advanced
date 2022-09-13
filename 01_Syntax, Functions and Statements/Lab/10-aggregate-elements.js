function solve(input){
    let elements = Array.from(input);

    function sum(array){
        return array.reduce((a, x) => a + x, 0);
    }

    function inversedSum(array){
        return array.reduce((a, x) => a + 1 / x, 0) ;
    }

    function concat(array){
        return array.join('');
    }

    let elementsSum = sum(elements);
    let inversedElementsSum = inversedSum(elements);
    let concatedElements = concat(elements);

    console.log(elementsSum);
    console.log(inversedElementsSum); 
    console.log(concatedElements);
}

solve([1, 2, 3]);