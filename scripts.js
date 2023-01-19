  let numberFirst= prompt("Digite o primeiro número")
  let numberSecond = prompt("Digite o segundo número")

  numberFirst = Number(numberFirst)
  numberSecond = Number(numberSecond)


  const sum = numberFirst + numberSecond
  const sub = numberFirst - numberSecond
  const multi = numberFirst * numberSecond
  const div = numberFirst / numberSecond
  const restDiv = numberFirst % numberSecond
  
  alert('Soma: ' + sum)
  alert('Subtração: ' + sub)
  alert('Multiplicação: ' + multi)
  alert('Divisão: ' + div)
  alert('Resto da divisão: ' + restDiv)

  if (sum % 2 == 0) {
    alert(`O número ${sum} é Par!`)
  } else {
    alert(`O número ${sum} é Impar!`)
  }                                                                                                                      
 
  if (numberFirst !== numberSecond) {
    alert("Os números inseridos são diferentes")
  }
 