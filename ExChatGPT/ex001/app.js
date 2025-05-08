let nome = prompt("Qual é o seu nome?");
let idade = parseInt(prompt("Qual é a sua idade?"));

function verificaIdade(idade) {
    if (idade >= 18) {
        alert(`Olá ${nome}, você pode participar!`);
        return true;
    } else {
        return false;
    }
}

function criarSenha() {
    return prompt("Crie uma senha: ");
}

function login(nomeEsperado, senhaEsperada) {
    let usuario = prompt("Digite seu nome:");
    let senha = prompt("Digite sua senha:");
    if (usuario !== nomeEsperado || senha !== senhaEsperada) {
        alert("Usuário ou senha inválidos!");
        return false;
    } else {
        alert("Login realizado com sucesso!");
        return true;
    }
}

function sortearNumero() {
    return Math.floor(Math.random() * 10) + 1;
}

function iniciarSessao() {
    if (verificaIdade(idade)) {
        let senhaCriada = criarSenha();
        if (login(nome, senhaCriada)) {
            let sorteio = prompt("Voce quer um numero par ou impar?");
            let numero = sortearNumero();
            alert(`Número sorteado: ${numero}`);
            if (numero % 2 === 0 && sorteio.toLowerCase() === "par") {
                alert("Parabéns! Você ganhou um prêmio!");
            } else if (numero % 2 !== 0 && sorteio.toLowerCase() === "impar") {
                alert("Parabéns! Você ganhou um prêmio!");
            }
            else {
                alert("Que pena! Você não ganhou um prêmio.");
            }
            console.log(`Usuário: ${nome}, Número sorteado: ${numero}`);
        }
    } else {
        alert("Você não pode participar!");
    }
}

iniciarSessao();