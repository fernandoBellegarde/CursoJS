// For in -> lê os índices ou chaves do objeto
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
