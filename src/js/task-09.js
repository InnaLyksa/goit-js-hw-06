function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const spanColortext = document.querySelector('.color');

btnChangeColor.addEventListener('click', onClickBodyChangeColor);

function onClickBodyChangeColor() {
  const randomBackgroundColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomBackgroundColor;
  spanColortext.textContent = randomBackgroundColor;
}
