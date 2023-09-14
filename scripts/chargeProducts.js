var namePro = ['Alfajor de Maisena', 'Producto1', 'Producto2', 'Producto3'];
var description = ['Alfajor relleno de dulce de leche', 'desc de product1', 'desc de product2', 'desc de product3'];
var CompanyName = ['Musa', 'Company name1', 'Company name2', 'Company name3'];
var priceP = [100, 2000, 168, 999];
function addCompany( _name, _price,  _description, _addres) {
    let nameCom = _name;
    let priceP = _price;
    let description = _description;
    let addres = _addres;
    let url = '#'
    let divHtml = '<div class="cards__card card"><h2 class="card__heading" id="nameCompany">' + nameCom + '  $' + priceP + '</h2>' +
        '<ul role="list" class="card__bullets flow"><li id="descriptionCompany">' + description + '</li>' +
        '<li id="addressCompany">' + addres + '</li></ul><a href="' + url + '" class="card__cta cta">Ver</a></div>';
    return divHtml;
}
(function ejecutar() {
    const list = document.getElementById("cardProducts");
    for (let index = 0; index < 4; index++) {
        let newCard = addCompany(namePro[index], priceP[index], description[index], CompanyName[index]);
        list.insertAdjacentHTML("afterbegin", newCard);
    }
})();

