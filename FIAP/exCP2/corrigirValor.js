/*
Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. 
Se não for possível, retorne "Valor inválido".
*/

function corrigirValor(valor) {
  const numero = Number(valor);
  return isNaN(numero) ? 'Valor inválido' : numero;
}