
var displayArray= [];
var holdArray = [];
let eleValue = document.querySelectorAll('.num')
let opValue = document.querySelectorAll('.operator')
let equals = document.querySelector('#equals')
let clear = document.querySelector('.clear-button')
let displayBox = document.querySelector('.display-box');
let calcAll = document.querySelector('.calculator')
let sqrt = document.querySelector('.sqrt');
var answer;

for(let i = 0; i < eleValue.length; i++){
    eleValue[i].addEventListener('click', function number(){
      holdArray.push(eleValue[i].id);
      displayArray = holdArray.join("");
      displayBox.textContent = displayArray;
    })
}

for(let i = 0; i < opValue.length; i++){
  opValue[i].addEventListener('click', function operater(){
    holdArray.push(opValue[i].id);
    displayArray = holdArray.join("");
    displayBox.textContent = displayArray;
  })
}

equals.addEventListener('click', function equals(){
  noCommas = holdArray.join("");
  answer = parseFloat(eval(noCommas).toFixed(7));
  displayBox.textContent = answer;
  displayArray = [];
  holdArray = [];
})

clear.addEventListener('click', function clear(){
  displayArray = [];
  holdArray = [];
  displayBox.textContent = displayArray;
})

sqrt.addEventListener('click', function sqrt(){
  noCommas = holdArray.join("");
  var sqrtAns = Math.sqrt(noCommas);
  answer = parseFloat(eval(sqrtAns).toFixed(7));
  displayBox.textContent = answer;
  displayArray= [];
  holdArray = [];
})
