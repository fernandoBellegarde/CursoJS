const pontuacao = 1000;
const nivel = pontuacao >= 1000 ? "Usuário VIP" : "Usuário Normal";
/*
if (pontuacao >= 1000) {
    console.log('Usuário VIP')
} else {
    conso.log('Usuário normal') 
}
*/

const cor = null; // mude para uma cor
const corPadrao = cor || "Preta";
console.log(nivel, corPadrao);
