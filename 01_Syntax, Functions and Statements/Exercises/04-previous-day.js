function solve(year, month, day){
    let date = new Date(`${year}-${month}-${day}`);
    let yesterday = new Date(date.setDate(date.getDate() - 1));

    return `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
} 

solve(2016, 10, 1);