let numberList = document.getElementById('numberList')


for(i=1; i<= 5; i++){
   let listItem =  document.createElement('li')
   listItem.textContent = 'Item ' + i
   numberList.appendChild(listItem)
}