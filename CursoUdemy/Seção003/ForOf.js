// For of = Retorna o valor em si (iteráveis, arrays ou strings)
const nome = "Nando Bell";

for (let valor of nome) {
  console.log(valor);
}
console.log("------------------\n");

const nomes = ["Nando", "Bell", "Cria"];

for (let v of nomes) {
  console.log(v);
}
console.log("------------------\n");

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});
console.log("------------------\n");

const pessoa = {
  nome: "Luiz",
  sobrenome: "Fernando",
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
