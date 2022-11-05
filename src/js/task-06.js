const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);
inputEl.addEventListener('focus', onInputFocus);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}

function onInputFocus() {
  inputEl.classList.remove('invalid', 'valid');
}
