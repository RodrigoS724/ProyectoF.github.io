let textoEnHTML = [
    "Hola Flavii!!!        Bienvenida",
    "Esto es un pequeño regalo que se atrazo unos días, dado al poco tiempo que he tenido",
    "Simplemente queria decirte lo mucho que te amoo y ...",
    "el gran aprecio que te tengo de una forma distinta para variar un poco :)",
    "y tambien ya de paso decirte que ..",
    "..",
    "..",
    "Nada jajaja me gusta mucho molestarte",
    "por ende te pido discuplas por los calentones de cabeza..",
    "que te he echo dar jajaja",
    "TE AMOO MOROCHA LINDAA",
    "FIIIIIINNNN"
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
            if (i + 1 < 12) {
                position = i
            }else{
                position = -1
            }
        }
    }
    document.getElementById('texto').innerHTML = ""
    document.getElementById('texto').innerHTML = "<p id='texto'>" + textoEnHTML[position + 1] + "</p>"
}