// Arguments que sustenta todos os argumentos enviados dentro de uma função
function funcao() {
  let total = 0;
  for (let argumentos of arguments) {
    total += argumentos;
  }
  console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8);
console.log();

// Undefined
function num(a, b, c, d, e, f) {
  console.log(a, b, c, e, d, f);
}

num(1, 2, 3);
console.log();

// Valor dentro do parametro
function soma(a, b = 2, c = 3) {
  console.log(a + b + c);
}
// undefined funciona caso eu queria que assuma o valor padrao, mas nao é ultilizado
soma(3, undefined, 10);
console.log();

// Atribuição via desestruturação OBJ
function pessoa({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
let obj = { nome: "Nando", sobrenome: "Bell", idade: 20 };
pessoa(obj);
console.log();

// Atribuição via desestruturação ARRAY
function ARRAY([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

ARRAY(["Fernando", "Bell", 30]);
console.log();

// Parametro REST (resto)
const conta = function (operador, acumulador = 1, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
};
conta("+", 200, 20, 30, 40, 50, 60, 70);
