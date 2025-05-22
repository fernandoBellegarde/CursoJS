const botao = document.getElementById("botaoToggle");
const texto = document.getElementById("texto");

function sigilo() {
  if (texto.style.display === "flex") {
    texto.style.display = "none";
  } else {
    texto.style.display = "flex";
  }
}

botao.addEventListener("click", sigilo);
