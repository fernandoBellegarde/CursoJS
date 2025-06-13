try {
  // É executado quando não tem erros
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("fechei o arquivo"); // Não fecha pq pulou ja que gerou erro
} catch (e) {
  // É executado quando há erros
  console.log("Tratando o erro");
} finally {
  // Sempre
  console.log("FINALLY: Eu sempre sou executado, fechar arquivo");
}
console.log("-----------------");

try {
  console.log(NãoExisto);
} catch (err) {
  console.log("NãoExisto não existe");
}
console.log();

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisao ser números");
  }

  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (err) {
  console.log("Alguma coisa mais amigavel pro usuario");
}
