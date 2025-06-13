const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2 || numero === 5) {
    console.log(`Pulei o numero ${numero}`);
    continue; // Ele pula para a proxima interação do laço
  }

  if (numero === 7) {
    console.log("7 encontrado, saindo ...");
    break; // Quebra o laço
  }

  console.log(numero);
}
