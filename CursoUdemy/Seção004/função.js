// Declaração de função (Function hoisting)
falaOi();

function falaOi() {
  console.log("Oi");
}
console.log();
// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function () {
  console.log("Sou um dado");
};

function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo:");
  funcao();
}
executaFuncao(souUmDado);
console.log();

// Arrow function

const funcaoArrow = () => {
  console.log("Sou um arrow function");
};
funcaoArrow();
console.log();

// Dentro de um objeto
const obj = {
  falar: function () {
    console.log("Estou falando...");
  },
};
obj.falar();
