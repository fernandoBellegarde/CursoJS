/*
Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

- Retornar `"Erro: parâmetros inválidos"` se numero1 ou numero2 não forem números.
- Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
- Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
- Executar a operação correta e retornar o resultado;

**Solução Switch/Case:**

*/

function calcular(numero1, numero2, operacao) {
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    return 'Erro: parâmetros inválidos';
  }

  switch (operacao) {
    case '+':
      return numero1 + numero2;
    case '-':
      return numero1 - numero2;
    case '*':
      return numero1 * numero2;
    case '/':
      if (numero2 === 0) return 'Erro: divisão por zero';
      return numero1 / numero2;
    default:
      return 'Erro: operação inválida';
  }
}