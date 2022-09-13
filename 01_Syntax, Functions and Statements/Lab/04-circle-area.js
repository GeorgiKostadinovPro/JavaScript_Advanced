function solve(input){
    let inputType = typeof input;

    if(inputType !== 'number'){
     console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
     return;
   }

   let circleArea = Math.PI  * Number(input) ** 2;
   console.log(circleArea.toFixed(2));
}

solve(5);