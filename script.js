function carregar() {
    var msg = window.document.getElementById('mensagem')
    var foto = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 5 && hora <12){
        // bom dia
        foto.src="fotomanha.png"
        document.body.style.background = '#f5c55d'
    } else if (hora >= 12 && hora <= 18){
        // boa tarde
        foto.src="fototarde.png"
        document.body.style.background = '#b7ba00'
    } else {
        // boa noite
        foto.src="fotonoite.png"
        document.body.style.background = '#191970'
    }
}
