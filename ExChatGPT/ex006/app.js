const form = document.getElementById("formTarefa");
const inputTitulo = document.getElementById("titulo");
const inputPrioridade = document.getElementById("prioridade");
const inputDescricao = document.getElementById("descricao");
const btnEnviar = document.getElementById("btnAdicionar");
const erro = document.getElementById("mensagemErro");
const tarefas = document.getElementById("listaTarefas");

btnEnviar.addEventListener("click", function enviar(event) {
  event.preventDefault();

  const tituloTask = inputTitulo.value.trim();
  const prioridade = inputPrioridade.value;
  const descricao = inputDescricao.value.trim();

  if (!tituloTask || !prioridade || !descricao) {
    erro.innerHTML = "[ERRO] Selecione todos os campos";
    erro.style.color = "red";
    return;
  }

  // Cria um novo card
  const cardTarefa = document.createElement("div");
  cardTarefa.classList.add("tarefa", prioridade); // Adiciona as classes para estilo

  // Define o conteúdo
  cardTarefa.innerHTML = `
    <h3>${tituloTask}</h3>
    <p><strong>Prioridade:</strong> ${prioridade}</p>
    <p>${descricao}</p>
  `;

  // Cria o botão de remover
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "Remover";
  btnRemover.classList.add("btn-remover");

  // Função de remover
  btnRemover.addEventListener("click", function () {
    tarefas.removeChild(cardTarefa);
  });

  // Adiciona o botão ao card
  cardTarefa.appendChild(btnRemover);

  // Adiciona o card na lista de tarefas
  tarefas.appendChild(cardTarefa);

  // Limpa o formulário e a mensagem de erro
  form.reset();
  erro.textContent = "";
});

