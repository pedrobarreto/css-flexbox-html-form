
// requisito 18
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (event) => {
    const agree = document.getElementById('agreement');
    if(!agree.checked) {
        event.preventDefault();
    }
})
