window.addEventListener('load', () => {
// a factoriser
    const numeros = [];
    while (numeros.length < 5) {
        let newNumber = Math.ceil(Math.random() * 50);
        if (numeros.indexOf(newNumber) == -1) {
            numeros.push(newNumber)
        }
    }

    const etoiles = [];
    while (etoiles.length < 2) {
        let newNumber = Math.ceil(Math.random() * 12);
        if (etoiles.indexOf(newNumber) == -1) {
            etoiles.push(newNumber)
        }
    }

    numeros.forEach((numero, index) => {
        const num = document.createElement("div");
        num.classList.add("zone", "boule");
        num.textContent = numero;
        document.getElementById("resultat").append(num);
        setTimeout(() => { num.classList.add("show"); }, 1000 * index + 500);
    })

    etoiles.forEach((etoile, index) => {
        const num = document.createElement("div");
        num.classList.add("zone", "etoile");
        num.textContent = etoile;
        document.getElementById("resultat").append(num);
        setTimeout(() => { num.classList.add("show"); }, 1000 * index + 5500);
    })
    
});

