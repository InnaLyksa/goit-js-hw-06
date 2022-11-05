const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    const newForm = {
      email: email.value,
      password: password.value,
    };
    console.log(newForm);
  }
  event.currentTarget.reset();
}
