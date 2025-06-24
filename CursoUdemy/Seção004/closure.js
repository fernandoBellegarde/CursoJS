// Closure é a habilidade que a função tem em executar seu escopo léxico

function retornaFuncao(nome) {
  return function () {
    return nome; // Closure pq ta fechando o escopo
  };
}

const funcao = retornaFuncao("Nando");
const funcao2 = retornaFuncao("Bell");
console.dir(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());
