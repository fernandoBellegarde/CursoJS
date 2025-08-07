const btnClicar = document.getElementById("btnClicar");
const paragrafo = document.getElementById("paragrafo");
const paragrafo2 = document.getElementById("paragrafo2");
const btnClicar2 = document.getElementById("btnClicar2");
const fomr = document.getElementById("form");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputAssunto = document.getElementById("assunto");
const inputMensagem = document.getElementById("mensagem");
const btnEnviar = document.getElementById("btnFormEnviar");
const cadastros = document.getElementById("cadastros");

function clicar() {
  paragrafo.textContent = "Você clicou no botão2!";
}

btnClicar.addEventListener("click", clicar);

btnClicar2.addEventListener("click", function clicar2() {
  paragrafo.textContent = "8==============D";
});

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();

  const nome = inputNome.value;
  const email = inputEmail.value;
  const assunto = inputAssunto.value;
  const mensagem = inputAssunto.value;

  if (!nome || !email || !assunto || !mensagem) {
    paragrafo2.textContent = "Preencha todos os campos caralho";
    paragrafo2.style.color = "red";
    // paragrafo2.classList.add("mensagem-error"); ---> Adiciona a classe "mensagem-error" do css
    return;
  }

  const cardUsuario = document.createElement("div");
  cardUsuario.innerHTML = `
        <h3>Nome: ${nome}</h3>
        <p>Email: ${email}</p>
    `;

  cadastros.appendChild(cardUsuario);

  // alert(`Nome: ${nome}\nEmail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}`);

  fomr.reset(); // Limpa os campos do formulário
});
