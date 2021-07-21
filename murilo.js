// requisito 18
const agree = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
agree.addEventListener('change', () => {
  if(agree.checked) {
    submitBtn.disabled = false;
  }
  else {
    submitBtn.disabled = true;
  }
})

