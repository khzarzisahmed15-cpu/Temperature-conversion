const textBox = document.getElementById("textBox");
const toFarenhiet = document.getElementById("toFarenhiet");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

window.onload = function(){
    toCelcius.checked = false;
    toFarenhiet.checked = false;
}

function convert(){
    if(toFarenhiet.checked){
      temp = Number(textBox.value);
      temp = temp * 9 / 5 + 32;
      result.textContent = `${temp.toFixed(2)} Degree Farenheit`;
    }else if(toCelcius.checked){
      temp = Number(textBox.value);
      temp = (temp - 32) * (5/9);
      result.textContent = `${temp.toFixed(2)} Degree Celcius`;
    }else{
        result.textContent = `Select a unit`;
    }
}