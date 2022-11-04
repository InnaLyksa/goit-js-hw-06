const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
    valueEl.textContent = this.value;
  },
  decrement() {
    this.value -= 1;
    valueEl.textContent = this.value;
  },
};

decrementBtn.addEventListener('click', function () {
  counterValue.decrement();
  // console.log(counterValue);
});

incrementBtn.addEventListener('click', function () {
  counterValue.increment();
  // console.log(counterValue);
});

//* Варіант 2
// const valueEl = document.querySelector('#value');
// let counterValue = 0;

// const incrementBtn = document.querySelector(
//   `button[ data-action = "increment"]`,
// );
// const decrementBtn = document.querySelector(
//   `button[ data-action = "decrement"]`,
// );

// incrementBtn.addEventListener('click', increment);
// decrementBtn.addEventListener('click', decrement);

// function increment() {
//   counterValue += 1;
//   valueEl.textContent = counterValue;
// }

// function decrement() {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
// }
