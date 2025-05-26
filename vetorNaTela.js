let valores = [1, 5, 8, 4, 6, 7];
valores.sort();

for (let pos = 0; pos < valores.length; pos++) {
  console.log(valores[pos]);
}

// Outro jeito

for (let pos in valores) {
  console.log(valores[pos]);
}
