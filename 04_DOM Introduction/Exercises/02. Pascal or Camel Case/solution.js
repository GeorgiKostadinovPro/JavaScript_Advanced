function solve() {
    let textInputElement = document.getElementById('text');
    let namingConvetionInputElement = document.getElementById('naming-convention');
    let resultSpanElement = document.getElementById('result');

    let words = textInputElement.value.toLowerCase().split(' ');

    function formatWord(word){
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    }

    if(namingConvetionInputElement.value === 'Camel Case'){
      for (let i = 1; i < words.length; i++) {
        let word = formatWord(words[i]);
        words[i] = word;
      }
    }else if(namingConvetionInputElement.value === 'Pascal Case'){
       words = words.map(x => formatWord(x));
    }else{
      resultSpanElement.textContent = 'Error!';
      return;
    }

    resultSpanElement.textContent = words.join('');
}