let numberList = document.getElementById('numberList')


for(i=1; i<= 5; i++){
   let listItem =  document.createElement('li')
   listItem.textContent = prompt("Digite sua fruta")
   numberList.appendChild(listItem)
}