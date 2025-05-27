let num = [5, 8, 4, 9];
num[3] = 6;
num.push(7); // Adiciona no finalda lista

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(num.sort()); // Organiza em ordem

let pos = num.indexOf(8);
console.log(`O valor 8 está na posição ${pos}`);
