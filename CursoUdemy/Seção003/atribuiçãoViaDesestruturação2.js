const pessoa = {
  nome: "Luiz",
  sobrenome: "Piasson",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

// Atribuição via desestruturação
const {
  endereco: { rua: r, numero },
  endereco,
} = pessoa;

console.log(r, numero, endereco);
