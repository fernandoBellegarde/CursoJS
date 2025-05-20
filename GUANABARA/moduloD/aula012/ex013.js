var agora = new Date()
var hora = agora.getHours();

console.log(`Agora são ${hora} horas`);

// Usando if else

if (hora < 12 && hora >= 5) {
    console.log('Bom dia');
}
else if (hora > 11 && hora <= 18) {
    console.log('Boa tarde');
}
else if (hora > 0 && hora < 5) {
    console.log('Boa madrugada');
}
else {
    console.log('Boa noite');
}

// Usando switch         0/1/2/3/4/5/6
// JS começa com Domingo D/S/T/Q/Q/S/S

var diaSem = agora.getDay();

console.log(diaSem)

switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia invalido')
        break    
}