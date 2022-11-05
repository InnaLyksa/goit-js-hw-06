const inputName = document.querySelector('#name-input');

const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', onOutputName);

function onOutputName(event) {
  if (event.currentTarget.value === '') {
    spanName.textContent = 'Anonymous';
  } else {
    spanName.textContent = event.currentTarget.value;
  }
}
