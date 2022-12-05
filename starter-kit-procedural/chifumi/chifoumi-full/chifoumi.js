let  ResultatJeux = [];
const chifoumi = ["pierre", "ciseau", "feuille"];
const boutonRejouer = document.querySelector("#boutonRejouer");
const resultatGauche = document.querySelector("#resultat-gauche");
const resultatDroite = document.querySelector("#resultat-droite");
const imageGauche = document.querySelector('#image-gauche');
const imageDroite = document.querySelector('#image-droite');
const fondGauche =  document.querySelector("#gauche");
const fondDroite = document.querySelector("#droite");
const titre = document.querySelector("#titre");

window.addEventListener('load', (event) => {
   initialisation();
});
boutonRejouer.addEventListener('click', (event) => {
    initialisation();
});
imageGauche.addEventListener('click', (event) => {
    joueurGauche();
});
imageDroite.addEventListener('click', (event) => {
    joueurDroite();
});

function initialisation() {
    boutonRejouer.style.display="none";
    resultatGauche.innerHTML = resultatDroite.innerHTML = "&nbsp;";
    ResultatJeux = ["rien", "rien"];
    imageGauche.style.pointerEvents = imageDroite.style.pointerEvents = 'auto';
    fondGauche.style.backgroundColor = fondDroite.style.backgroundColor = "#C3C2C2";
    titre.textContent="Chifoumi";
    imageGauche.style.backgroundImage = imageDroite.style.backgroundImage = "url(images-pfc/depart.jpg)"; 
}

function choixAleatoire() {
    return chifoumi[Math.floor(Math.random()*chifoumi.length)];
}

function joueurGauche() {
    let chifoumi = choixAleatoire();
    ResultatJeux[0] = chifoumi;
    imageGauche.style.backgroundImage = "url(images-pfc/"+chifoumi+".jpg)";
    fondGauche.style.backgroundColor = "black";
    resultatGauche.textContent = chifoumi;
    imageGauche.style.pointerEvents = 'none';
    checkChifou();
}

function joueurDroite() {
    let chifoumi = choixAleatoire();
    ResultatJeux[1] = chifoumi;
    imageDroite.style.backgroundImage = "url(images-pfc/"+chifoumi+".jpg)";
    fondDroite.style.backgroundColor = "black";
    resultatDroite.textContent = chifoumi;
    imageDroite.style.pointerEvents = 'none';
    checkChifou();
}

function checkChifou() {
    setTimeout(() => {
            if (ResultatJeux[0] === ResultatJeux[1]) {
                titre.textContent="Egalité, ça craint !!";
                fondDroite.style.backgroundColor = fondGauche.style.backgroundColor="red";
            } else if (ResultatJeux[0] === 'ciseau' && ResultatJeux[1] === 'pierre') {
                titre.innerHTML="La pierre défonce le ciseau";
                fondGauche.style.backgroundColor="red";
                fondDroite.style.backgroundColor="green";
                resultatGauche.textContent="Perdu";
                resultatDroite.textContent="Gagné";
            } else if (ResultatJeux[0] === 'ciseau' && ResultatJeux[1] === 'feuille') {
                titre.innerHTML="Le ciseau coupe la feuille";
                fondGauche.style.backgroundColor="green";
                fondDroite.style.backgroundColor="red";
                resultatGauche.textContent="Gagné";
                resultatDroite.textContent="Perdu";
            } else if (ResultatJeux[0] === 'feuille' && ResultatJeux[1] === 'pierre') {
                titre.innerHTML="La feuille enveloppe la pierre";
                fondGauche.style.backgroundColor="green";
                fondDroite.style.backgroundColor="red";
                resultatGauche.textContent="Gagné";
                resultatDroite.textContent="Perdu";
            } else if (ResultatJeux[0] === 'feuille' && ResultatJeux[1] === 'ciseau') {
                titre.innerHTML="Le ciseau coupe la feuille";
                fondGauche.style.backgroundColor="red";
                fondDroite.style.backgroundColor="green";
                resultatGauche.textContent="Perdu";
                resultatDroite.textContent="Gagné";
            } else if (ResultatJeux[0] === 'pierre' && ResultatJeux[1] === 'feuille') {
                titre.innerHTML="La feuille enveloppe la pierre";
                fondGauche.style.backgroundColor="red";
                fondDroite.style.backgroundColor="green";
                resultatGauche.textContent="Perdu";
                resultatDroite.textContent="Gagné";
            } else if (ResultatJeux[0] === 'pierre' && ResultatJeux[1] === 'ciseau') {
                titre.innerHTML="La pierre défonce le ciseau";
                fondGauche.style.backgroundColor="green";
                fondDroite.style.backgroundColor="red";
                resultatGauche.textContent="Gagné";
                resultatDroite.textContent="Perdu";
            }
            boutonRejouer.style.display="initial";
        }, 1000);
}
