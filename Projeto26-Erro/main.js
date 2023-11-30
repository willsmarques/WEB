let num1Input = document.getElementById("numberInput");
let ckeckButton = document.getElementById("ckeckButton");
let outputDiv = document.getElementById("output");


ckeckButton.addEventListener("click",function(){
  let number = Number(numberInput.value);

  if(number >= 1 && number <= 10){
    outputDiv.innerHTML = "Valid number";
  } else if(number < 1){
    outputDiv.innerHTML = "Number is too small!";
  } else if (number > 10){
    outputDiv.innerHTML = "Number is too large!"
  }else {
     outputDiv.innerHTML = "Something went wrong!"
  }
  num1Input.value = ""

});
