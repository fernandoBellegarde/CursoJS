const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log("--------------\n");

// Função factory, fabrica de objetos
function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa2 = criaPessoa("Maria", "Oliveiras", 25);
const pessoa3 = criaPessoa("Luiz", "Otavio", 22);
const pessoa4 = criaPessoa("João", "Morerira", 95);
const pessoa5 = criaPessoa("Nando", "Bell", 55);

console.log(pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);
console.log("--------------\n");

const animal = {
  nome: "Thor",
  raça: "Husky",
  idade: 4,

  som() {
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

animal.som();
animal.incrementaIdade();
animal.som();
animal.incrementaIdade();
animal.som();
