const button = document.querySelector('.button');
const mainContainer = document.querySelector('.container');
const colorDisplay = document.querySelector('.color-value');

button.addEventListener('click', () => {
    const fromInput = document.querySelector('.from-value').value;
    const toInput = document.querySelector('.to-value').value;
    let colorCode = getBackGroundColor();
    mainContainer.style.background = `linear-gradient(to right, ${colorCode[0]} ${fromInput}%, ${colorCode[1]} ${toInput}%)`;
    colorDisplay.innerHTML = colorCode;
});

function getBackGroundColor() {
    const colorString = '0123456789ABCDEF';
    let color;
    let colorArray = [];
    while(colorArray.length < 2) {
        color = '#';
        for (i = 0; i < 6; i++) {
            color += colorString[Math.floor(Math.random() * 16)];
        }
        colorArray.push(color);
    }
    return colorArray;
}
