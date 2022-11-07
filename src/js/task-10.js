function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const listOfElements = document.querySelector('#boxes');
const inputValue = document.querySelector('#controls').querySelector('input');

const startWidthValue = 30;
const startHeightValue = 30;

const createBoxes = () => {
  let boxWithNumbers = [];
  for (let i = 0; i < inputValue.value; i += 1) {
    const boxElement = document.createElement('div');
    const widthValue = startWidthValue + i * 10;
    const heightValue = startHeightValue + i * 10;
    boxElement.style.backgroundColor = getRandomHexColor();
    boxElement.style.border = '1px solid #000000';
    boxElement.style.width = `${widthValue}px`;
    boxElement.style.height = `${heightValue}px`;
    boxElement.style.marginTop = '10px';
    boxWithNumbers.push(boxElement);
  }
  listOfElements.append(...boxWithNumbers);
};

const destroyBoxes = () => {
  listOfElements.innerHTML = '';
  inputValue.value = '';
};

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);
