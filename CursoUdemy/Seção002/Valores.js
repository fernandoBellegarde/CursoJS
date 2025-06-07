/* 
Primitivos (imutáveis) - string, number, boolean, 
undefined, null (bigint, symbol) - Valores copiados
*/
let a = "A";
let b = a;
console.log(a, b);

a = "Outra coisa";
console.log(a, b);

/*
Referência (mutável) - array, object, function - Passados por refêrencia
*/

let q = [1, 2, 3];
let w = q;
console.log(q, w);

q.push(4);
console.log(q, w);

w.pop();
console.log(q, w);

const z = {
  nome: "Luiz",
  sobrenome: "Otavio",
};

const x = { ...z };

z.nome = "João";
console.log(z);
console.log(x);
