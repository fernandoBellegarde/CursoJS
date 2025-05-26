function contar() {
  let inicio = document.getElementById("inicio");
  let fim = document.getElementById("fim");
  let passo = document.getElementById("passo");
  var res = document.getElementById("res");

  inicio = inicio.value;
  fim = fim.value;
  passo = passo.value;

  let i = Number(inicio);
  let f = Number(fim);
  let p = Number(passo);

  if (inicio.lenght == 0 || fim.lenght == 0 || passo.lenght == 0) {
    res.innerHTML("Impossivel contar!");
  } else {
    res.innerHTML = "Contando: <br>";

    if (p <= 0) {
      alert("Passo inválido! Considerando p = 1");
      p = 1;
    }
    if (i < f) {
      //crescente
      for (let c = i; c <= fim; c += p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    } else {
      // regressiva
      for (let c = i; c >= fim; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
