import {Fruit} from "./fruitsObject.js"
import {fruits} from "./data.js"
const fruitsHtml = document.querySelector("#fruits");

fruits.forEach(fruit => {
   const fruitObj = new Fruit(fruit.name, fruit.image);
    fruitsHtml.appendChild(fruitObj.getHtml);
});