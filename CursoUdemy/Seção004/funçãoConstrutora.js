// Função construtora -> objetos
// Função fabrica -> objetos
// Fábrica -> criaPessoa()
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  // Atributos ou metodos privados, pois nao estao disponiveis fora do corpo
  const ID = 123;

  const metodoInterno = () => {
    // sla da pra usar pra validar cpf e coisas assim. Coisas internas
  };

  // Atributos ou metodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ": sou um metodo");
  };
}

// new cria um novo objeto vazio e faz o this apontar para o obj vazio e retorna o objeto para a variavel, nao precisa do return
const p1 = new Pessoa("Nando", "White");
const p2 = new Pessoa("Bob", "Brown");

p2.metodo();
