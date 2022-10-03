function getArticleGenerator(articles) {
    let contentDivElement = document.getElementById('content');

    return function(){
        let currArticleElement = document.createElement('article');

        if(articles.length === 0){
            return;
        }

        currArticleElement.textContent = articles.shift();
        contentDivElement.appendChild(currArticleElement);
    }
}