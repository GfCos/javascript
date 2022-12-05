/*
Les données pour les fruits
Un tableau [] contenant des objets {}
*/
let fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }, { name: "Cerise", image: "cerise.jpg" }];

// Une variable qui va service à stocker le nom d'image de l'élément cliqué.
let imageSelected = "all-fruits.jpg";

// Création d'un objet associé à un élément html(div) ayant l'ID fruits
const fruitsHtml = document.querySelector("#fruits");

// Création d'un objet associé à un élément html(div) ayant l'ID imageFruit
const imageTochange = document.querySelector('#imageFruit');

// Boucle forEach permetant de parcourir tout les objets du tableau fruits
fruits.forEach(fruit => {
    // création d'une balise html, dans ce cas:  <div></div>
    const div = document.createElement('div');

    // ajout d'une classe CSS à la div : <div class="boutonFruits"></div> 
    div.classList.add("boutonFruits");

    // Ajout de texte à l'intérieur de la div, le texte est la propriété name de chaque objet.
    //<div class="boutonFruits">Orange</div>
    div.textContent = fruit.name;

    /* Calcul de la hauteur de chaque div suivant le nombre d'objets contenus
     dans le tableau afin d'occuper toute la hauteur de la fenêtre */
    div.style.height = 100 / fruits.length + "vh";

    // Création d'un événement mouseover (survol) sur la div.
    div.addEventListener('mouseover', (event) => {
        /* Changement de l'image de fond sur l'objet imageToChange (block de gauche)
         en modifiant le style background-image */
        imageTochange.style.backgroundImage = `url(${fruit.image})`;
    })

    // Création d'un événement mouseout (sortie) sur la div.
    div.addEventListener('mouseout', (event) => {
        // Retour à l'image de fond qui est stocké dans la variable imageSelected
        imageTochange.style.backgroundImage = `url(${imageSelected}`;
    });

    // Création d'un événement click sur la div.
    div.addEventListener('click', (event) => {
        // assignation d'une nouvelle valeur à la variable imageSelected
        imageSelected = fruit.image;

        //Selection de toutes les div avec querySelectorAll qui retourne un tableau d'objets.
        const allFruits = document.querySelectorAll(".boutonFruits");

        // boucle dans allFruits
        allFruits.forEach(fruitDiv => {
            // Modification du style background-color sur chaque div
            fruitDiv.style.backgroundColor = "";
        })
        // changement du style uniquement sur l'élément qui a été cliqué
        div.style.backgroundColor = "red";
    });
    // Ajout de la div comme enfant à l'objet fruitsHtml
    fruitsHtml.appendChild(div);
});