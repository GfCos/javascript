import {Numero} from "./numero.js"
import {Boule} from "./boule.js"
import {Etoile} from "./etoile.js"
window.addEventListener('load', () => {
const resultat = document.getElementById("resultat");
    Numero.numbersRandomGenerator(50, 5).concat(Numero.numbersRandomGenerator(12, 2)).forEach((uniqueNumber, index) => {
        if (index < 5) {
            const newNum = new Boule(uniqueNumber);
            resultat.append(newNum.getHtml);
            setTimeout(() => {
                newNum.setVisible();
            }, 1000*index + 1000)
        } else {
            const newEtoile = new Etoile(uniqueNumber);
            resultat.append(newEtoile.getHtml);
            setTimeout(() => {
                newEtoile.setVisible();
            }, 1000*index + 1000)
        }
    });

});

