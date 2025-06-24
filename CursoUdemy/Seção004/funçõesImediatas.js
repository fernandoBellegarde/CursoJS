// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {
  const sobrenome = "Bell";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Nando"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 80, 1.7);

// Criar
(function () {
  // Assim que se estrutura
})();
