function tabuada() {
  let num = document.getElementById("txtn");
  let select = document.getElementById("seltab");

  if (num.lenght == 0) {
    alert("Por favor, digite um numero!");
  } else {
    num = Number(num.value);
    select.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
      resultado = num * i;
      let item = document.createElement("option");
      item.text = `${num} x ${i} = ${resultado}`;
      select.appendChild(item);
    }
  }
}
