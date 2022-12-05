const fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }, { name: "Cerise", image: "cerise.jpg" }];
const fruitsObjects = [];
const fruitsHtml = document.querySelector("#fruits");
const imageTochange = document.querySelector('#imageFruit');
let imageSelected = "all-fruits.jpg";

fruits.forEach(fruit => {
   const fruitObj = new Fruit(fruit.name, fruit.image);
   fruitsObjects.push(fruitObj);
    fruitsHtml.appendChild(fruitObj.getHtml);
});