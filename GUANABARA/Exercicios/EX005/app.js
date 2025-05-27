let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = []; // ← array para armazenar os valores

function isNumero(n) {
  return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
  return l.indexOf(Number(n)) != -1;
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value)); // Adiciona o número ao array
    let item = document.createElement("option"); // Cria um novo elemento option
    item.text = `Valor ${num.value} adicionado.`; // Define o texto do option
    lista.appendChild(item); // Adiciona o option à lista
    res.innerHTML = ""; // Limpa a mensagem de resultado
  } else {
    alert("Valor inválido ou já encontrado na lista.");
  }
  num.value = ""; // Limpa o campo de entrada
  num.focus(); // Foca novamente no campo de entrada
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores antes de finalizar!");
  } else {
    let total = valores.length; // Obtém o total de valores
    let maior = valores[0]; // Inicializa o maior com o primeiro valor
    let menor = valores[0]; // Inicializa o menor com o primeiro valor
    let soma = 0; // Inicializa a soma
    let media = 0; // Inicializa a média

    for (let pos in valores) {
      soma += valores[pos]; // Soma os valores
      if (valores[pos] > maior) {
        maior = valores[pos]; // Atualiza o maior valor
      }
      if (valores[pos] < menor) {
        menor = valores[pos]; // Atualiza o menor valor
      }
    }

    media = soma / total; // Calcula a média
    res.innerHTML = ""; // Limpa a mensagem de resultado
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores é ${media}.</p>`;
  }
}
