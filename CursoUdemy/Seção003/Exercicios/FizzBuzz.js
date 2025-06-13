/*
Escreva uma função que recebe um número e retorne o seguinte:
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número NÃO é divisivel por 3 e 5 = Retorna o próprio número 
Checar se o número é realmente um número = Retorna o próprio número
Use a função com númerp de 0 a 100
*/

function fizzBuzz(numero) {
  if (typeof numero !== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return numero;
}

// Testando a função com diferentes valores
console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz(9));  // Fizz
console.log(fizzBuzz(10)); // Buzz
console.log(fizzBuzz(7));  // 7
console.log(fizzBuzz('teste')); // teste
