
function somaNumeros() {
    let numero1 = 4;
    let numero2 = 5;

    return numero1 + numero2;
}

function exibirResultado() {
    let resultado = somaNumeros();
    console.log(resultado);
}

exibirResultado()

function nome() {
    let name = prompt("Digite seu nome: ");
    return name;
}

function age() {
    let idade = parseInt(prompt("Digite sua idade: "));
    return idade;
}

function nomeIdade(nome, idade) {
    alert(`Olá ${nome}! Vc tem ${idade} anos`);
}

function iniciar() {
    nomeIdade(nome(), age());
}

iniciar();



/*
let nome = "NAndo Bell     ";

console.log(nome.length);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.includes("a"));
console.log(nome.includes("A"));
console.log(nome.trim());

let numero = 3.14169;

console.log(numero.toFixed(2));
console.log(isNaN(nome)); // isNaN verifica se é um numero ou não
console.log(isNaN(numero)); // isNaN verifica se é um numero ou não

console.log(Math.floor(Math.random()*11)) // Math.floor arredonda pra baixo
console.log(Math.ceil(Math.random()*11)) // Math.ceil arredonda pra cima
console.log(Math.round(Math.random()*11)) // Math.round arredonda seguindo a media

let novaData = new Date();
console.log(novaData)
console.log(novaData.getFullYear())
*/