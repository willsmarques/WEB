let valorConta = 0
let gorjeta = 0
let valorTotal = 0


 valorConta = parseFloat(prompt('Digite o valor da conta: '))
 gorjeta = parseFloat(prompt('Digite a gorjeta (decimal)%'))

 gorjeta = (valorConta * gorjeta) /100

 valorTotal = valorConta + gorjeta
 
 alert('o valor total com  gorjeta é de $ ' + valorTotal)
