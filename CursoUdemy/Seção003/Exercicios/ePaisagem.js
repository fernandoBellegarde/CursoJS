/* 
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e
altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.
*/

const ePaisagem = (largunda, altura) => largunda > altura;

console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));
