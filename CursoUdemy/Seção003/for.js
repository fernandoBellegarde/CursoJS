for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "par" : "impar";
  console.log(i, par);
}

console.log("------------------------");

const frutas = ["Maça", "Pera", "Uva", "Cereja", "Banana"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}
