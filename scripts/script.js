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
    console.log(textoCard.textContent)
    let position = -1
    for (let i = 0; i < textoEnHTML.length; i++) {
        console.log(i)
        console.log(textoCard.textContent === textoEnHTML[i])
        if (textoCard.textContent === textoEnHTML[i]) {
            console.log("entre")
            if (i + 1 < 6) {
                position = i
            }else{
                position = -1
            }
        }
    }
    document.getElementById('texto').innerHTML = ""
    document.getElementById('texto').innerHTML = "<p id='texto'>" + textoEnHTML[position + 1] + "</p>"
}