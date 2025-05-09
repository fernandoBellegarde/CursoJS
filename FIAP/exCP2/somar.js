/*
A função abaixo tenta somar dois números, mas está sem nenhuma validação. Encontre e corrija os problemas para que a função funcione corretamente. 
Considere que o parâmetro b pode ser opcional e que, se não for fornecido, deve ser considerado como 0. 
Além disso, a função não deve retornar valores de tipos inesperados (como NaN ou undefined), e deve tratar casos em que os parâmetros não são números, retornando a mensagem "Parâmetro inválido”.

verificar ex8 para corrigir certinho: https://cherry-client-b8f.notion.site/CP2-Javascript-COM-RESPOSTA-1e6911d84e0d805ca413f82ba7b9bdb2
*/

function somar(a, b = 0) {
  // Verificar se 'a' e 'b' são números
  if (isNaN(a) || isNaN(b)) {
    return "Parâmetro inválido"; // Retornar Parâmetro inválido se algum dos parâmetros não for um número
  }

  // Garantir que a conversão para número seja feita corretamente, mesmo se os parâmetros forem strings
  let resultado = Number(a) + Number(b);

  return resultado;
}

// Testando a função
console.log(somar(5));         // Esperado: 5
console.log(somar(5, "3"));    // Esperado: 8
console.log(somar("10", 10));  // Esperado: 20
console.log(somar("abc", 5));  // Esperado: “Parâmetro inválido"
console.log(somar(null, 5));   // Esperado: “Parâmetro inválido"
