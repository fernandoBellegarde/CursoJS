// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

let nome = "Luiz"; // criando
var nome2 = "Luiz"; // criando

if (true) {
  let nome = "Otavio"; // criando
  var nome2 = "Rogerio"; // redeclarando

  if (true) {
    let nome = "Fernando"; // criando
    var nome2 = "Ronaldo"; // redeclarando
  }
}

console.log(nome, nome2); // Luiz Ronaldo
console.log("----------------------");

function falaOi() {
  var name = "Luiz";
  var sobrenome = "Bell";

  if (true) {
    let nome3 = "Nando";
    console.log(nome3);
    console.log(sobrenome);
  }
  // console.log(nome3); // not defined
  console.log(sobrenome);
}
//console.log(name) // erro
falaOi();
console.log("----------------------");

// console.log(marca); // erro
console.log(animal); // undefined

let marca = "nike";
var animal = "Dog";
