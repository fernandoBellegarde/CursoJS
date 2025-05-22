let input = document.getElementById("nome");
const p = document.getElementById("mensagem");
const botao = document.getElementById("enviar");

function clicar() {
  if (input.value == "") {
    p.innerHTML = "Erro, você não escreveu nenhum nome";
    p.style.color = "red";
  } else {
    p.innerHTML = `Olá, ${input.value}`;
    p.style.color = "black";
  }
}

botao.addEventListener("click", clicar);
