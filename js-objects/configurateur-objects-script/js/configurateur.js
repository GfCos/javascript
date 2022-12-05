const optionsTissu = [
    { couleur: 'Jaune', code: '#e2d047', image: './images/option-1-jaune.png', price: 12.30 },
    { couleur: 'Orange', code: '#f1722f', image: './images/option-1-orange.png', price: 12.00 },
    { couleur: 'Violet', code: '#bd3ad8', image: './images/option-1-violet.png', price: 12.10 }
];
const optionsPoche = [
    { couleur: 'Bleu', code: '#11119e', image: './images/option-2-bleu.png', price: 8.30 },
    { couleur: 'Fuchsia', code: '#991157', image: './images/option-2-fuchsia.png', price: 8.50 },
    { couleur: 'Rouge', code: '#d31431', image: './images/option-2-rouge.png', price: 8.10 },
    { couleur: 'vert', code: '#a1cc16', image: './images/option-2-vert.png', price: 8.75 }
];
const couleurText = [
    { couleur: 'Blanc', code: '#FFFFFF' },
    { couleur: 'Noir', code: '#000000' },
    { couleur: 'Bleu', code: '#11119e' },
    { couleur: 'Fuchsia', code: '#991157' },
    { couleur: 'Rouge', code: '#d31431' },
    { couleur: 'vert', code: '#a1cc16' },
    { couleur: 'Jaune', code: '#e2d047' },
    { couleur: 'Orange', code: '#f1722f' }
];
let selectedTissu = "Violet";
let selectedPoche = "Rouge";
let customText = 'Votre texte ici';
let selectedTextColor = 'Noir';
let textOption = true;
const prixLettre = 1.80;
const bulletTissuArray = [];
const bulletPocheArray = [];
const bulletTexteArray = [];

window.addEventListener("load", () => {
    // start option tissu
    const tissuOptions = document.getElementById("tissu");
    optionsTissu.forEach(tissu => {
        const newBulletTissu = new BulletTissu(tissu.couleur, tissu.code, tissu.image, tissu.price);
        if (tissu.couleur == selectedTissu) {
            selectedTissu = newBulletTissu;
            selectedTissu.selected();
        }
        bulletTissuArray.push(newBulletTissu);
        tissuOptions.appendChild(newBulletTissu.getHtml);
    });

    // start option poche
    const pocheOptions = document.getElementById("optionPoche");
    optionsPoche.forEach(poche => {
        const newBulletPoche = new BulletPoche(poche.couleur, poche.code, poche.image, poche.price);
        if (poche.couleur == selectedPoche) {
            selectedPoche = newBulletPoche;
            selectedPoche.selected();
        }
        bulletPocheArray.push(newBulletPoche);
        pocheOptions.appendChild(newBulletPoche.getHtml);
    });

    // start option couleur texte
    const texteColorOptions = document.getElementById("textColorOptions");
    couleurText.forEach(texteColor => {
        const newBulletTexte = new BulletTexte(texteColor.couleur, texteColor.code);
        if (texteColor.couleur == selectedTextColor) {
            newBulletTexte.selected();
        }
        bulletTexteArray.push(newBulletTexte);
        texteColorOptions.appendChild(newBulletTexte.getHtml);
    });

    document.querySelector("#customText").addEventListener("input", (event) => {
        customText = event.target.value;
        document.querySelector(".textePerso").textContent = customText;
        repricing();
    })
    document.querySelectorAll('[name="UseText"]').forEach(element => {
        element.addEventListener("change", event => {
            if (event.target.value === "true") {
                textOption = true;
            } else {
                textOption = false;
            }
            // textOption = event.target.value === "true" ? true : false;
            repricing();
        })
    })

})
function repricing() {
    let calculatedPrice = 0;
    calculatedPrice += selectedTissu.getPrice;
    calculatedPrice += selectedPoche.getPrice;
   // calculatedPrice += bulletPocheArray.find(poche => poche.getCouleur == selectedPoche).getPrice;
    if (textOption) {
        calculatedPrice += customText.length * prixLettre;
        document.querySelector("#textColorOptions").style.visibility = document.querySelector("#customText").style.visibility = document.querySelector(".textePerso").style.visibility = "visible";
    } else {
        document.querySelector("#textColorOptions").style.visibility = document.querySelector("#customText").style.visibility = document.querySelector(".textePerso").style.visibility = "hidden";
    }

    document.querySelector(".price").textContent = calculatedPrice.toFixed(2) + " €";

}