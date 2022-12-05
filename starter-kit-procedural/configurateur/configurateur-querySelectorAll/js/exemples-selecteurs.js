// querySelector() et querySelectorAll() utilisent les selecteurs CSS
// https://www.w3schools.com/cssref/css_selectors.php


const allTissuDiv = document.querySelectorAll("#tissu > div");
console.log(allTissuDiv);

const lastChild = document.querySelector(".viewer :last-child");
console.log(lastChild);

const allImages = document.querySelectorAll("[src]");
console.log(allImages);

const inputRadio = document.querySelectorAll("[name=UseText]");
console.log(inputRadio);

const allPocheDiv = document.querySelectorAll("[id^=poche]");
console.log(allPocheDiv);