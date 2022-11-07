const inputEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

spanTextEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', onChangeStyleSpanText);

function onChangeStyleSpanText(event) {
  spanTextEl.style.fontSize = `${event.currentTarget.value}px`;
}
