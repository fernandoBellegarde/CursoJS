const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNuemro, segundoNumero, ...resto] = numeros;

console.log(primeiroNuemro, segundoNumero);
console.log(resto);
console.log("-------------------");

const [um, , tres, , cinco, , sete] = numeros;

console.log(um, tres, cinco);
console.log("-------------------");

const numeros2 = [
  //    0
  // 0  1  2
  [1, 2, 3],
  //    1
  // 0  1  2
  [4, 5, 6],
  //    2
  // 0  1  2
  [7, 8, 9],
];
console.log(numeros2[1][2]);

const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);
