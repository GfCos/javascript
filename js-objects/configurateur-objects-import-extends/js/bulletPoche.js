import {Bullet} from './bullet.js'
import {bulletPocheArray,variables,repricing} from "./variables.js"
export class BulletPoche extends Bullet { 
    constructor(couleur, code, image, price) {
        super(couleur, code, image, price);
        this.html = document.createElement("div");
        this.html.addEventListener("click", event => {
            variables.selectedPoche = this.couleur;
            bulletPocheArray.forEach(poche => {
                poche.unSelected();
                if (poche.getCouleur == variables.selectedPoche) {
                    poche.selected();
                }
            })
            document.getElementById("optionPocheImage").src = this.image;
            repricing();
        })
    }
}