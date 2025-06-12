// For in -> lê os índices ou chaves do objeto
// Retorna indice ou chave (string, arrays ou objetos)
const frutas = ["Pera", "Maça", "Uva"];

for (let i in frutas) {
  console.log(frutas[i]);
}
console.log();
// --------------

const pessoa = {
  nome: "Nando",
  sobrenome: "Bell",
  idade: 30,
};

for (let chave in pessoa) {
  console.log(pessoa[chave]);
}

const nome = "Nando Bell";

for (let i in nome) {
  console.log(nome[i]);
}
