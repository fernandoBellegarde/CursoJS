/*
let nome = prompt("Qual seu nome ?")

if (nome === "fernando") {
    alert('PASSOU PAE')
    console.log("Ta liberado pae")
}
else if (nome === "Henrique") {
    alert('Ta mamando hein')
    console.log("Ta mamando hein")
}
else {
    alert('B R E C A D O')
    console.log("B R E C A D O")
}
*/

//nome === "Otávio" ? console.log("É você"): console.log("Não é você")

/*
* && === and = true   
* || === ou = true
* ! === não lógico = true
* 
*/

/*
alert("PRIMEIRO CADASTRA DEPOIS FAZ LOGIN")
let Cadastro = prompt("Digite seu cadastro")
let Senha = prompt("Digite sua senha")

alert("AGORA É LOGIN")
let login = prompt("Digite seu login")
let senha = prompt("Digite sua senha")

if (Cadastro !== login || Senha !== senha) {
    alert("Foi pego na mamada")
}
else {
    alert("On e roteando fiot")
}
*/

// filtros de acesso
let whosThere = prompt("Quem é você ?\n")
let senha = parseInt(prompt("Qual a senha ?\n"))

if ((whosThere === "Adimin" && senha === 123) || 
    (whosThere === "Otavio" && senha === 123) || 
    (whosThere === "Henrique" && 123)  || 
    (whosThere === "Fernando" && senha === 123)) {
    alert("Bem vindo " + whosThere)
    console.log("Bem vindo " + whosThere)
}

else {
    alert("Você não tem acesso")
    console.log("Você não tem acesso")
}
