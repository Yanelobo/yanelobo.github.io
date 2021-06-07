function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12){
        img.src = "manha.png"
        document.body.style.background = '#efe5a4'
        msg.innerHTML += " Bom dia!"
    } else if (hora >= 12 && hora < 18){
          img.src = "tarde.png"  
          document.body.style.background = '#a8d7ff'
          msg.innerHTML += " Boa tarde!"
    } else {
        img.src = "noite.png"
        document.body.style.background = '#3c4168'
        msg.innerHTML += " Boa noite!"
    }
   
    if (minuto < 10){
        minuto = "0" + minuto
  }
}