
var displayArray= [];
var holdArray = [];
let eleValue = document.querySelectorAll('.num')
let opValue = document.querySelectorAll('.operator')
let equals = document.querySelector('#equals')
let clear = document.querySelector('.clear-button')
let displayBox = document.querySelector('.display-box');
let calcAll = document.querySelector('.calculator')
var answer;

for(let i = 0; i < eleValue.length; i++){
    eleValue[i].addEventListener('click', function(){
      holdArray.push(eleValue[i].id);
      displayArray = holdArray.join("");
      displayBox.textContent = displayArray;
    })
}



for(var i = 0; i < opValue.length; i++){
  opValue[i].addEventListener('click', action(i));
};

// FIXME: runs this function and prints the operators without any event.

function action(i){
  holdArray.push(opValue[i].id);
  displayArray = holdArray.join("");
  displayBox.textContent = displayArray;
};


equals.addEventListener('click', function(){
  console.log(displayArray);
  noCommas = holdArray.join("");
  answer = parseFloat(eval(noCommas).toFixed(9));
  console.log('the answer is ' + answer);
  displayBox.textContent = answer;
  displayArray = [];
  holdArray = [];

})

clear.addEventListener('click', function(){
  displayArray = [];
  holdArray = [];
  console.log('Cleared the displayArray ' + displayArray);
  displayBox.textContent = displayArray;
})
