import {Numero} from "./numero.js"
export class Boule extends Numero {
    constructor(number) {
        super(number);
        this.html.classList.add("zone", "boule");
    }
    get getHtml() {
        this.html.textContent = this.number;
        return this.html;
    }

}