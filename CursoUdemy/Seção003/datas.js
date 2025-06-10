const data1 = new Date(2025, 3, 20, 15, 14, 27);
//                    yyyy, MM, dd, h, M, s
// Sun Apr 20 2025 15:14:27
console.log(data1.toString());

const data2 = new Date("2020-04-20 20:10:59");
console.log(data2.toString());
console.log("Dia", data2.getDate());
console.log("Mes", data2.getMonth());
console.log("Ano", data2.getFullYear());
console.log("Hora", data2.getHours());
console.log("Min", data2.getMinutes());
console.log("Seg", data2.getSeconds());
console.log("Dia da semana", data2.getDay()); // o -Doming, 6 - Sábado
//-------------------------------------
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);
