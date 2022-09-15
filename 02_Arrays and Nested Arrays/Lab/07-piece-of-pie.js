function solve(pieFlavors, target1, target2){
    let startIdx = pieFlavors.indexOf(target1);
    let endIdx = pieFlavors.indexOf(target2);

    let result = pieFlavors.slice(startIdx, endIdx + 1);

    return result;
}

solve(['Pumpkin Pie',
       'Key Lime Pie',
       'Cherry Pie',
       'Lemon Meringue Pie',
       'Sugar Cream Pie'],
       'Key Lime Pie',
       'Lemon Meringue Pie');