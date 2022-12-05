let fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }, { name: "Cerise", image: "cerise.jpg" }];

const fruitsHtml = document.querySelector("#fruits");
const imageTochange = document.querySelector('#imageFruit');
let imageSelected = "all-fruits.jpg";

fruits.forEach(fruit => {
    const div = document.createElement('div');
    div.classList.add("boutonFruits");
    div.textContent = fruit.name;
    div.style.height = 100 / fruits.length+"vh";
    div.addEventListener('mouseover', (event) => {
        imageTochange.style.backgroundImage = `url(${fruit.image})`;
    })
    div.addEventListener('mouseout', (event) => {
        imageTochange.style.backgroundImage = `url(${imageSelected}`;
    });
    div.addEventListener('click', (event) => {
        imageSelected = fruit.image;
        imageTochange.style.backgroundImage = `url(${imageSelected}`;
        const allFruits = document.querySelectorAll(".boutonFruits");
        allFruits.forEach(fruitDiv => {
            fruitDiv.style.backgroundColor = "";
        })
        div.style.backgroundColor = "red";
    });
    fruitsHtml.appendChild(div);
});