function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

function finalizar(e) {
  e.preventDefault();
  const peso = parseFloat(document.querySelector("#peso").value);
  const altura = parseFloat(document.querySelector("#altura").value);
  const res = document.querySelector(".res");

  if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
    const resultado = imc(peso, altura);
    let classificacao = "";

    if (resultado >= 40) {
      classificacao = "Obesidade grau III";
    } else if (resultado >= 35) {
      classificacao = "Obesidade grau II";
    } else if (resultado >= 30) {
      classificacao = "Obesidade grau I";
    } else if (resultado >= 25) {
      classificacao = "Sobrepeso";
    } else if (resultado >= 18.5) {
      classificacao = "Peso ideal";
    } else {
      classificacao = "Abaixo do peso";
    }

    res.innerHTML = `IMC = ${resultado.toFixed(2)} (${classificacao})`;
  } else {
    res.innerHTML = `Digite apenas números válidos`;
  }
}
