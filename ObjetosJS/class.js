class Pessoa {
  constructor(pNome) {
    this.nome = pNome;
  }
}

let p1 = new Pessoa("Bruno");
let p2 = new Pessoa("Fernando");
let p3 = new Pessoa("Bellegarde");

console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);
console.log("---------------");

class Carro {
  canal = "CFB Cursos";
  constructor(pMarca, pTipo) {
    this.marca = pMarca;
    if (pTipo == 1) {
      this.tipo = "esportivo";
      this.velmax = 300;
    } else if (pTipo == 2) {
      this.tipo = "Ultilitário";
      this.velmax = 200;
    } else if (pTipo == 3) {
      this.tipo = "Passeio";
      this.velmax = 100;
    } else {
      this.tipo = "Militar";
      this.velmax = 180;
    }
  }

  getMarca() {
    return this.marca;
  }
  getTipo() {
    return this.tipo;
  }
  getVelMax() {
    return this.velmax;
  }

  getInfo() {
    return [this.marca, this.tipo, this.velmax];
  }

  setMarca(marca) {
    this.marca = marca;
  }
  setTipo(tipo) {
    this.tipo = tipo;
  }
  setVelMax(velmax) {
    this.velmax = velmax;
  }

  info() {
    console.log(`Nome: ${this.marca} `);
    console.log(`Nome:  ${this.tipo} `);
    console.log(`Nome: ${this.velmax}`);
    console.log(`Canal: ${this.canal}`);
    console.log("---------------");
  }
}

let c1 = new Carro("Rapidão", 1);
let c2 = new Carro("Super Luxo", 2);
let c3 = new Carro("Bombadão", 4);
let c4 = new Carro("Carrego tudo", 3);

c1.info();
c1.setMarca("Superman");
c1.info();
c1.setVelMax(500);
c1.info();

//c2.info();
//console.log(c2.getInfo());
