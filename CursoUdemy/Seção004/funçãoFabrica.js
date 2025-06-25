// Factory function (função fábrica)
// Constructor function (função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto) {
      return `${this.nome} ${sobrenome} tem ${this.peso}kg e esta falando sobre ${assunto}`;
    },

    altura: altura,
    peso: peso,

    // Getter
    get imc() {
      const indice = peso / altura ** 2;
      return `IMC do ${nome}: ${indice.toFixed(2)}`;
    },
  };
}
// this é o p1 === p1.peso

const p1 = criaPessoa("Nando", "Brown", 1.7, 76);
const p2 = criaPessoa("Maria", "Pink", 1.5, 56);

console.log(p1.fala("cachorro"));
console.log(p2.fala("gatos"));
console.log();
console.log(p1.imc);
console.log(p2.imc);
console.log();
console.log(p1.nomeCompleto);
console.log(p2.nomeCompleto);
console.log();
p1.nomeCompleto = "Alex Nardo Grey";
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
