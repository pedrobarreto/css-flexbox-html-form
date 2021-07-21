let logarButton = document.querySelector('.submit-button');
let pwdInput = document.querySelector('[name=pwd]');
let loginInput = document.querySelector('[name=login]')
function formSubmit(event) {
  event.preventDefault();
  if( pwdInput.value === '123456' && loginInput.value === 'tryber@teste.com') { 
   window.alert('Olá, Tryber!')
  }
  window.alert('Login ou senha inválidos.')
}
logarButton.addEventListener('click', formSubmit);

function trybeRating() {
  let labelRate = document.querySelector('#trybe-rating');
  for ( i=1; i <= 10; i += 1) {
  let createLabel = document.createElement('label')  
  let createElement = document.createElement('input')  
  labelRate.appendChild(createElement).type = 'radio';
  labelRate.appendChild(createElement).name = 'rate';
  labelRate.appendChild(createElement).value = [i];
  labelRate.appendChild(createElement).id = [i]
  createLabel.for=[i];
  labelRate.appendChild(createLabel).innerText = [i];
  }
  }
  
  // requisito 18
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (event) => {
  const agree = document.getElementById('agreement');
  if (!agree.checked) {
    event.preventDefault();
  }
});

  window.onload = function() {
    trybeRating();
    };
    