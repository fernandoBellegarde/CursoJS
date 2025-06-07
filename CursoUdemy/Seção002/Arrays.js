const nome = "Luiz Otavio";

const alunos = ["Luiz", "Maria", "João"];

alunos[0] = "Eduardo";
alunos[3] = "Luiza";

console.log(alunos);
console.log("-------------------------");

alunos.push("Luiza"); // Coloca no final
alunos.unshift("Otavio"); // Add no começo
console.log(alunos);
console.log("-------------------------");

const removidoF = alunos.pop(); // Remove o ultimo
const removidoC = alunos.shift(); // Remove o primeiro
console.log(removidoF);
console.log(removidoC);
console.log(alunos);

/* Deleta totalmente
delete alunos[1];
console.log(alunos);
*/
console.log("-------------------------");

console.log(alunos.slice(0, 3));
console.log("-------------------------");

console.log(typeof alunos);
console.log(alunos instanceof Array);
