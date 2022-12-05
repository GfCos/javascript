export class Bullet { 
    constructor(couleur, code, image, price) {
        this.couleur = couleur;
        this.code = code;
        this.image = image;
        this.price = price;
    }

    selected() {
        this.html.classList.add("selectedColor");
    }
    unSelected() {
        this.html.classList.remove("selectedColor");
    }

    get getHtml() {
        this.html.classList.add("ColorRound");
        this.html.dataset.couleur = this.couleur;
        this.html.style.backgroundColor = this.code;
        return this.html;
    }
    get getCouleur() {
        return this.couleur;
    }
    get getPrice() {
        return this.price;
    }
}