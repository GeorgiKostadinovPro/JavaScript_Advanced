function solve(first, second, third){
   let strings = [first, second, third];
   let lengthSum = strings
   .reduce((a, x) => a + x.length, 0);

   let averageLength = strings
   .reduce((a, x) => a + x.length, 0) / strings.length;

   averageLength = Math.round(averageLength, 0);

   console.log(lengthSum);
   console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');