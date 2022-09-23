function colorize() {
    let tableRowElements = Array.from(document.querySelectorAll('table tr'));

    tableRowElements.forEach((row, i) => {
        if(i % 2 !== 0){
            row.style.background  = 'teal';
        }
    });
}