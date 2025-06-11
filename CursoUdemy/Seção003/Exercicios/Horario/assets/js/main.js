function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function getDayWeekText(dayWeek) {
  let dayWeekText;

  switch (dayWeek) {
    case 0:
      dayWeekText = "Domingo";
      break;
    case 1:
      dayWeekText = "Segunda-feira";
      break;
    case 2:
      dayWeekText = "Terça-feira";
      break;
    case 3:
      dayWeekText = "Quarta-feira";
      break;
    case 4:
      dayWeekText = "Quinta-feira";
      break;
    case 5:
      dayWeekText = "Sexta-feira";
      break;
    case 6:
      dayWeekText = "Sábado";
      break;
  }

  return dayWeekText;
}

function getMonthText(month) {
  let monthText;

  switch (month) {
    case 0:
      monthText = "janeiro";
      break;
    case 1:
      monthText = "fevereiro";
      break;
    case 2:
      monthText = "março";
      break;
    case 3:
      monthText = "abril";
      break;
    case 4:
      monthText = "maio";
      break;
    case 5:
      monthText = "junho";
      break;
    case 6:
      monthText = "julho";
      break;
    case 7:
      monthText = "agosto";
      break;
    case 8:
      monthText = "setembro";
      break;
    case 9:
      monthText = "outubro";
      break;
    case 10:
      monthText = "novembro";
      break;
    case 11:
      monthText = "dezembro";
      break;
  }

  return monthText;
}

function dateFormat() {
  return `${getDayWeekText(date.getDay())}, ${date.getDay()} de ${getMonthText(
    date.getMonth()
  )} de ${date.getFullYear()}
   ${hora}:${min}`;
}

const date = new Date();
const hora = zeroAEsquerda(date.getHours());
const min = zeroAEsquerda(date.getMinutes());

const res = document.querySelector("#res");

res.innerHTML += dateFormat();

/* 
VERSÃO TOP GPT

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function getDayWeekText(dayWeek) {
  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return days[dayWeek];
}

function getMonthText(month) {
  const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];
  return months[month];
}

const date = new Date();
const hora = zeroAEsquerda(date.getHours());
const min = zeroAEsquerda(date.getMinutes());

function dateFormat() {
  return `${getDayWeekText(date.getDay())}, ${date.getDate()} de ${getMonthText(
    date.getMonth()
  )} de ${date.getFullYear()} ${hora}:${min}`;
}

const res = document.querySelector("#res");
res.innerHTML += dateFormat();

*/
