const semaforo = document.getElementById("semaforo");
const btnVermelho = document.getElementById("vermelho");
const btnAmarelo = document.getElementById("amarelo");
const btnVerde = document.getElementById("verde");

btnVermelho.addEventListener("click", () => {
  semaforo.style.backgroundColor = "red";
});

btnAmarelo.addEventListener("click", () => {
  semaforo.style.backgroundColor = "yellow";
});

btnVerde.addEventListener("click", () => {
  semaforo.style.backgroundColor = "green";
});
