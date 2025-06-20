const inputTarefa = document.querySelector(".inputNovaTarefa");
const btnAdd = document.querySelector(".btnAddTarefa");
const listaTarefa = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function criaBotaoApagar(li) {
  li.innerHTML += " ";
  const btnApa = document.createElement("button");
  btnApa.innerHTML = "Apagar";
  btnApa.setAttribute("class", "apagar");
  li.appendChild(btnApa);
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerHTML = textoInput;
  listaTarefa.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnAdd.addEventListener("click", function (e) {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = listaTarefa.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", " ").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
