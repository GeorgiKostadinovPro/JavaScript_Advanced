function attachGradientEvents() {
    let gradientDivElement = document.getElementById('gradient');
    let resultDivElement = document.getElementById('result');

    gradientDivElement.addEventListener('mousemove', (e) => {
        let currPercentage = Math.floor(e.offsetX / (e.target.clientWidth - 1) * 100);
        resultDivElement.textContent = `${currPercentage}%`
    });
}