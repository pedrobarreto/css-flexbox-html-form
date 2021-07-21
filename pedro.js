

function trybeRating() {
let labelRate = document.querySelector('#trybe-rating');
for ( i=0; i < 10; i += 1) {
let createElement = document.createElement('input')  
labelRate.appendChild(createElement).innerText = [i];
labelRate.appendChild(createElement).type = 'radio';
labelRate.appendChild(createElement).name = 'rate';
labelRate.appendChild(createElement).value = [i];
}
}

window.onload = function() {
  trybeRating();
  };
  