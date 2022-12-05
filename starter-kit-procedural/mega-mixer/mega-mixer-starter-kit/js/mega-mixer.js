const ListeApprenants = ["BAALI Ike-David","DETHIER Maxime","DOMERGUE Jonathan","FALCONIER Franck","OZMANOV Alik","PENTEADO Anthony","PETIT Wilfrid","PICHOFF Brandon","TRAVASSOS Carl-Antoine"];

const card = document.getElementById("card");
const boutonAEffacer = document.getElementById("ButtonToDelete");

boutonAEffacer.addEventListener("click", function( event ) {
    card.classList.toggle('flip');
});