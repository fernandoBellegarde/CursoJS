// Return
// Retorna um valor
// Termina a função

function soma(a, b) {
  return a + b;
}

console.log(soma(5, 2));
console.log();

// salva o valor
function soma2(a, b) {
  console.log(a + b);
}
console.log(soma2(5, 2));

//Return objeto
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

const p1 = criaPessoa("Nando", "Bell");
console.log();

// Return's
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("mundo");
console.log(resto);
console.log();

// Exemplos repeticao de evitar
function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));
