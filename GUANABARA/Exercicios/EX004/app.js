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
      item.value = `select${c}`;
      select.appendChild(item);
    }
  }

  /*
  7 x 1 = 7
  7 x 2 = 14 
  7 x 3 = 21
  7 x 4 = 28
  7 x 5 = 35
  7 x 6  =42
  */
}
