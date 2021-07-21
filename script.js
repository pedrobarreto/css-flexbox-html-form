let logarButton = document.querySelector('.submit-button');
let pwdInput = document.querySelector('[name=pwd]');
let LoginInput = document.querySelector('[name=login]')

function formSubmit(event) {
  event.preventDefault();
  if( pwdInput.value === '123456' && LoginInput.value === 'tryber@teste.com') { 
   window.alert('Olá, Tryber!')
  }
  window.alert('Login ou senha inválidos.')
}

logarButton.addEventListener('click', formSubmit);
