let textoEnHTML = [
    "Esta es la version 2.0 San Valentin",
    "Feliz San Valentin Morochitaaaa",
    "Me haces re feliz preciosa",
    "Se que esto no es la gran cosa pero te lo dedico para vos",
    "Que sos lo mejor que me ha pasado",
    "TE AMOOOO"
]

function nextText() {
    let textoCard = document.getElementById('texto');
    let position = -1;
    if(textoCard.textContent!="Que sos lo mejor que me ha pasado"){
    for (let i = 0; i < textoEnHTML.length; i++) {
        if (textoCard.textContent === textoEnHTML[i]) {
            if (i + 1 < 6) {
                position = i
            }else{
                position = -1
            }
        }
    }
    document.getElementById('texto').innerHTML = ""
    document.getElementById('texto').innerHTML = "<p id='texto'>" + textoEnHTML[position + 1] + "</p>"
}else{
    const esteBoton = document.getElementById('boton');
    document.getElementById('boton').innerHTML = "ESTA YA ES LA ULTIMAAA"
    esteBoton.disable = true;
    esteBoton.onclick = "";
    document.getElementById('texto').innerHTML = "<p id='texto'>" + "TE AMOOOOO" + "</p>"
    console.log(esteBoton)
}
    
}