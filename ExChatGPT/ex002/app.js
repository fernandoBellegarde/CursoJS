const botao = document.getElementById("botao");
const res = document.getElementById("contador");
let cliques = 0;

function clicar() {
  cliques++;

  contador.innerHTML = `Cliques: ${cliques}`;
}

botao.addEventListener("click", clicar);
