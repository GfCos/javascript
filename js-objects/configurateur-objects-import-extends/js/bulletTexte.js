import {Bullet} from './bullet.js'
import {bulletTexteArray,variables,repricing} from "./variables.js"
export class BulletTexte extends Bullet { 
    constructor(couleur, code) {
        super(couleur, code);
        this.html = document.createElement("div");
        this.html.addEventListener("click", event => {
            variables.selectedTextColor = this.couleur;
            document.querySelector(".textePerso").style.color = this.code;
            bulletTexteArray.forEach(texteColor => {
                texteColor.unSelected();
                if (texteColor.getCouleur == variables.selectedTextColor) {
                    texteColor.selected();
                }
            })
            repricing();
        })
    }
}