function extract(content) {
    let contentPElements = document.getElementById(content);

    let matches = contentPElements.textContent
    .match(/\([\w ]+\)/gm)
    .join('')
    .match(/[\w ]+/gm);

    return matches.join('; ');
}