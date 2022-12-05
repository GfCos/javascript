const fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }, { name: "Cerise", image: "cerise.jpg" }];

const blockGauche = document.querySelector("#imageFruit");
const blockDroit = document.querySelector("#fruits");

fruits.forEach(fruit => {
const divFruit = document.createElement("div");
divFruit.classList.add("boutonFruits");
divFruit.textContent = fruit.name;
divFruit.style.height = 100 / fruits.length +"vh";
divFruit.addEventListener('mouseover',(event) => {
blockGauche.style.backgroundImage = `url(${fruit.image})`; //  `url(${fruit.image})`
})
divFruit.addEventListener('mouseout',(event) => {
    blockGauche.style.backgroundImage = `url(all-fruits.jpg)`; //  `url(${fruit.image})`
    })
blockDroit.appendChild(divFruit);
})