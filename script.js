const logarButton = document.querySelector('.submit-button');
const pwdInput = document.querySelector('[name=pwd]');
const loginInput = document.querySelector('[name=login]');
function formSubmit(event) {
  event.preventDefault();
  if (pwdInput.value === '123456' && loginInput.value === 'tryber@teste.com') {
    window.alert('Olá, Tryber!');
  }
  window.alert('Login ou senha inválidos.');
}
logarButton.addEventListener('click', formSubmit);

function trybeRating() {
  const labelRate = document.querySelector('#trybe-rating');
  for (let i = 1; i <= 10; i += 1) {
    const createLabel = document.createElement('label');
    const createElement = document.createElement('input');
    labelRate.appendChild(createElement).type = 'radio';
    labelRate.appendChild(createElement).name = 'rate';
    labelRate.appendChild(createElement).value = [i];
    labelRate.appendChild(createElement).id = [i];
    createLabel.for = [i];
    labelRate.appendChild(createLabel).innerText = [i];
  }
}

// requisito 18
const agree = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
agree.addEventListener('change', () => {
  if (agree.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

// requisito 20
const textArea = document.querySelector('textarea');
const counter = document.querySelector('#counter');
textArea.addEventListener('input', () => {
  const contador = 500 - textArea.value.length;
  counter.innerText = contador;
});

window.onload = () => {
  trybeRating();
};
