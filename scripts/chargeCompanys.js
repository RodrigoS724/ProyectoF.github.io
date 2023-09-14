var nameCom = ['JoyeriaRoy', 'Aliexpress', 'Musa', 'Peluqueria el rocho'];
var description = ['Joyas de todo tipo', 'baratito', 'pasteleria', 'cortes bien rochos'];
var addres = ['paysandu, Uruguay', 'China', 'Mercedes, Uruguay', 'paysandu, Uruguay'];

function addCompany( _name, _description, _addres) {
    let nameCom = _name;
    let description = _description;
    let addres = _addres;
    let divHtml = '<div class="cards__card card"><h2 class="card__heading" id="nameCompany">' + nameCom + '</h2>' +
        '<ul role="list" class="card__bullets flow"><li id="descriptionCompany">' + description + '</li>' +
        '<li id="addressCompany">' + addres + '</li></ul><a href="#basic" class="card__cta cta">Ver</a></div>';
    return divHtml;
}
(function ejecutar() {
    const list = document.getElementById("cardCompany");
    for (let index = 0; index < 4; index++) {
        let newCard = addCompany(nameCom[index], description[index], addres[index]);
        list.insertAdjacentHTML("afterbegin", newCard);
    }
})();

