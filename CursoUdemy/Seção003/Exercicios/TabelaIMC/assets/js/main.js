// Função que calcula o IMC
function calcularIMC(peso, altura) {
  return peso / altura ** 2;
}

// Lista de classificações
const classificacoesIMC = [
  { min: 0, max: 18.4, classificacao: "Abaixo do peso" },
  { min: 18.5, max: 24.9, classificacao: "Peso ideal" },
  { min: 25, max: 29.9, classificacao: "Sobrepeso" },
  { min: 30, max: 34.9, classificacao: "Obesidade grau I" },
  { min: 35, max: 39.9, classificacao: "Obesidade grau II" },
  { min: 40, max: Infinity, classificacao: "Obesidade grau III" },
];

// Função que retorna a classificação com base no IMC
function obterClassificacao(imc) {
  return (
    classificacoesIMC.find((faixa) => imc >= faixa.min && imc <= faixa.max)
      ?.classificacao || "Desconhecido"
  );
}

// Função executada ao enviar o formulário
function finalizar(e) {
  e.preventDefault();

  const peso = parseFloat(document.querySelector("#peso").value);
  const altura = parseFloat(document.querySelector("#altura").value);
  const res = document.querySelector(".res");

  if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
    const imc = calcularIMC(peso, altura);
    const classificacao = obterClassificacao(imc);
    res.innerHTML = `IMC = ${imc.toFixed(2)} (${classificacao})`;
  } else {
    res.innerHTML = `Digite apenas números válidos.`;
  }
}
