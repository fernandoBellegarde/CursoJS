const estudante = "Fernando";

if (estudante === "Fernando") {
  console.log("pinto");
}

if ("0" == 0) {
  console.log(true);
}

let valor = 30;
//condição ?      caso 'true'    :     caso 'false'
valor < 50 ? "valor insuficiente" : "valor suficiente";

let matriculaAtiva = true;

function verificaMatriculaAtiva() {
  return matriculaAtiva
    ? "matrícula ativa no sistema"
    : "matrícula não está ativa";
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'
