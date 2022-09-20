function solve(input){
    let inputAsJSON = JSON.parse(input);

    let tableElement = [ '<table>' ];
    let firstStudentObj = inputAsJSON[0];
    let tableHeaderElement = '   <tr>';

    Object.keys(firstStudentObj).forEach(key => {
         tableHeaderElement += `<th>${escapeHTML(key)}</th>`;
    });

    tableHeaderElement += '</tr>';
    tableElement.push(tableHeaderElement);

    inputAsJSON.forEach(studentObj => {
        let studentRowElement = '   <tr>';

        Object.keys(studentObj).forEach(key => {
            studentRowElement += `<td>${escapeHTML(studentObj[key])}</td>`;
        });

        studentRowElement += '</tr>';
        tableElement.push(studentRowElement);
    });

    function escapeHTML(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    tableElement.push('</table>');
    return tableElement.join('\n');
}

solve(`[{"Name":"Stamat","Score":5.5}, {"Name":"Rumen", "Score":6}]`);