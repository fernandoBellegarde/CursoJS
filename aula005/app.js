let nomeCompleto = "Caio";
let idade = 18;
// let cria uma variavel que pode mudar

const a = "a";
// const cria uma variavel que é constante

console.log(nomeCompleto);
// console printa

let nome = prompt("Qual é o seu nome?", "Insira aqui seu nome");
// let resposta = confirm()

alert(`Olá ${nome}, tudo bem?`);
// console.log(resposta)

let numero1, numero2, soma;

numero1 = parseInt(prompt("digite o numero 1 para a soma"));
numero2 = parseInt(prompt("digite o numero 2 para a soma"));
/* tratamento: 
´parseInt´ = inteiro 
´Number´ = inteiro ou decimal
´parseFloat´ = decimal
*/
soma = numero1 + numero2;

alert(`soma = ${soma}`);
// alert(String(soma)) converte pra String dnv