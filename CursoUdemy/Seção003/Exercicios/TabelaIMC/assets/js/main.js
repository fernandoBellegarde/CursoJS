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

    if (imc > 40) {

    }
    res.innerHTML = `IMC = ${resultado.toFixed(2)} (${})`;
  } else {
    res.innerHTML = `Digite apenas números válidos`;
  }
}
