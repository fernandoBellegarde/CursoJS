function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >=0 && hora < 12) {
        // bom dia
        img.src = './img/manha.jpg'
        document.body.style.background = 'green'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = './img/tarde.jpg'
        document.body.style.background = 'orange'

    } else {
        // boa noite
        img.src = './img/noite.jpg'
        document.body.style.background = 'black'
    }
}

