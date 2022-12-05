export class Numero {
    constructor(number) {
        this.number = number;
        this.html = document.createElement("div");
    }

    static numbersRandomGenerator(maxNumber, elementNumber) {
        const arrayNumbers = [];
        while (arrayNumbers.length < elementNumber) {
            let newNumber = Math.ceil(Math.random() * maxNumber);
            (arrayNumbers.indexOf(newNumber) == -1) ? arrayNumbers.push(newNumber) : null;
        }
        return arrayNumbers;
    }

    setVisible() {
        this.html.style.opacity = 1;
        this.html.style.visibility = "visible";

    }
    
}