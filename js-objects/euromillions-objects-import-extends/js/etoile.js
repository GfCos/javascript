import {Numero} from "./numero.js"
export class Etoile extends Numero {
    constructor(number) {
        super(number);
        this.html.classList.add("zone", "etoile");
    }

    get getHtml() {

        this.html.textContent = this.number;
        return this.html;
    }
}