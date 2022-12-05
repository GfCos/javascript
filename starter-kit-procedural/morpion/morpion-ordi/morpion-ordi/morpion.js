let nombreCoup;
let emplacement;
let gagnant;
let table = document.getElementById("center");
let cells = table.getElementsByTagName("td");

window.addEventListener('load', (event) => {
    initialisation();
});

function initialisation() {
    document.getElementById("rejouer").style.display = "none";
    document.getElementById("titre").textContent = "Super Morpion";
    nombreCoup = 0;
    gagnant = undefined;
    emplacement = {
        Zonea1: "vide",
        Zonea2: "vide",
        Zonea3: "vide",
        Zoneb1: "vide",
        Zoneb2: "vide",
        Zoneb3: "vide",
        Zonec1: "vide",
        Zonec2: "vide",
        Zonec3: "vide"
    };
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        cell.style.backgroundPosition = "left";
        cell.style.pointerEvents = 'auto';
    }
}

function jouer(zone) {
    document.getElementById(zone).style.backgroundPosition = "right";
    emplacement[zone] = "rond";
    document.getElementById(zone).style.pointerEvents = 'none';
    nombreCoup++;
    checkWin();

    if (nombreCoup === 9 && typeof gagnant === 'undefined') {
        document.getElementById("titre").textContent = "Pas de gagnant";
        document.getElementById("rejouer").style.display = "initial";
    } else if (typeof gagnant === 'undefined') {
        let espaceVide = [];
        for (const key in emplacement) {
            if (emplacement[key] === 'vide') {
                espaceVide.push(key);
            }
        }
        const ChoixCaseVide = Math.floor(Math.random() * espaceVide.length);
        const codeCase = espaceVide[ChoixCaseVide];
        setTimeout(function () { document.getElementById(codeCase).style.backgroundPosition = "center" }, 500);
        emplacement[codeCase] = "croix";
        document.getElementById(codeCase).style.pointerEvents = 'none';
        nombreCoup++;
        checkWin();
    }
}

function checkWin() {
    if (verifEgalite(emplacement["Zonea1"], emplacement["Zonea2"], emplacement["Zonea3"]) || verifEgalite(emplacement["Zoneb1"], emplacement["Zoneb2"], emplacement["Zoneb3"]) || verifEgalite(emplacement["Zonec1"], emplacement["Zonec2"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea1"], emplacement["Zoneb1"], emplacement["Zonec1"]) || verifEgalite(emplacement["Zonea2"], emplacement["Zoneb2"], emplacement["Zonec2"]) || verifEgalite(emplacement["Zonea3"], emplacement["Zoneb3"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea1"], emplacement["Zoneb2"], emplacement["Zonec3"]) || verifEgalite(emplacement["Zonea3"], emplacement["Zoneb2"], emplacement["Zonec1"])) {
        if (gagnant === 'croix') {
                 document.getElementById("titre").textContent = "L'ordinateur a gagné !";
        } else {
            document.getElementById("titre").textContent = "Tu as gagné !";
        }
        document.getElementById("rejouer").style.display = "initial";
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.pointerEvents = 'none';
        }
    }
}

function verifEgalite(zone1, zone2, zone3) {
    if (zone1 === zone2 && zone1 === zone3 && zone1 !== 'vide') {
        gagnant = zone1;
        return true;
    } else {
        return false;
    }
}