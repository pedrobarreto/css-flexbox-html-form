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
  
  window.onload = function() {
    trybeRating();
    };
    