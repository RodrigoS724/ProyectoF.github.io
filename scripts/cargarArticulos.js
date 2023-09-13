

function addCompany() {
    let nameCom = "JoyeriaRoy";
    let description = "Holaaa";
    let addres = "ny";
    let divHtml ='<div class="cards__card card"><h2 class="card__heading" id="nameCompany">' + nameCom + '</h2>' +
    '<ul role="list" class="card__bullets flow"><li id="descriptionCompany">' + description + '</li>' +
   '<li id="addressCompany">' + addres + '</li></ul><a href="#basic" class="card__cta cta">Ver</a></div>';
    return divHtml;
}
(function ejecutar(){
    const list = document.getElementById("cardCompany");
    let newCard = addCompany();
    for (let index = 0; index < 4; index++) {
        list.insertAdjacentHTML("afterbegin", newCard);
    }
})();

