function solve(day){
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    let dayIndex = days.indexOf(day);

    if(dayIndex === -1){
        console.log('error');
        return;
    }

    console.log(dayIndex + 1);
}

solve('Monday');