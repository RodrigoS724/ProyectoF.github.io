var nameService = ['Servicio1', 'Servicio2', 'Servicio3', 'Servicio4'];
var description = ['Descripcion de Servicio', 'Descripcion de Servicio', 'Descripcion de Servicio', 'Descripcion de Servicio'];
var nameCom = ['Compañia de Servicio', 'Compañia de Servicio', 'Compañia de Servicio', 'Compañia de Servicio'];
var priceP = [100, 2000, 168, 999];
function addCompany( _name, _price,  _description, _addres) {
    let nameCom = _name;
    let priceP = _price;
    let description = _description;
    let addres = _addres;
    let divHtml = '<div class="cards__card card"><h2 class="card__heading" id="nameCompany">' + nameCom + '  $' + priceP + '</h2>' +
        '<ul role="list" class="card__bullets flow"><li id="descriptionCompany">' + description + '</li>' +
        '<li id="addressCompany">' + addres + '</li></ul><a href="#basic" class="card__cta cta">Ver</a></div>';
    return divHtml;
}
(function ejecutar() {
    const list = document.getElementById("cardService");
    for (let index = 0; index < 4; index++) {
        let newCard = addCompany(nameService[index], priceP[index], description[index], nameCom[index]);
        list.insertAdjacentHTML("afterbegin", newCard);
    }
})();

