const container = document.querySelector(".container");
const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset-btn");
var random = document.getElementById("random-color");
var mono = document.getElementById("mono");

// create square
const createSquares = (dimension) => {
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
    container.style.width = "600px";
    container.style.height = "600px";
    container.style.margin = "auto";
    container.style.gridGap = "1px";
    container.style.border = "3px solid #fff";
};

var colorful = (dimension) => {
    random.style.backgroundColor = "blue";
    random.style.padding = "0.5em";
    random.style.borderRadius = "1em"
    mono.style.backgroundColor = "";
    mono.style.padding = "";
    mono.style.borderRadius = ""

    for (let i = 0; i < dimension ** 2; i++) {
        let square = document.createElement("div");
        square.classList.add(".cell");
        square.style.opacity = "1";
        container.appendChild(square);
        square.addEventListener('mouseover', (event) => {
            currentSquareColor = event.target.style.backgroundColor;
            currentSquareOpacity = event.target.style.opacity;

            if (currentSquareColor == "") {
                event.target.style.backgroundColor = randomColor();

            } else if (currentSquareOpacity > 0) {
                event.target.style.opacity = currentSquareOpacity - 0.1;
            }
        });
    }

}

var monochrome = (dimension) => {
    mono.style.backgroundColor = "blue";
    mono.style.padding = "0.5em";
    mono.style.borderRadius = "1em"
    random.style.backgroundColor = "";
    random.style.padding = "";
    random.style.borderRadius = ""

    for (let i = 0; i < dimension ** 2; i++) {
        let square = document.createElement("div");
        square.classList.add(".cell");
        square.style.opacity = "1";
        container.appendChild(square);
        square.addEventListener('mouseover', (event) => {
            currentSquareColor = event.target.style.backgroundColor;
            currentSquareOpacity = event.target.style.opacity;

            if (currentSquareColor == "") {
                event.target.style.backgroundColor = "white";

            } else if (currentSquareOpacity > 0) {
                event.target.style.opacity = currentSquareOpacity - 0.1;
            }
        });
    }

}

function getRandomRGBValue() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    return `rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()})`;
}

const getInputValueColor = () => {
    var dimensions = document.getElementById("dimension").value;
    createSquares(dimensions);
    colorful(dimensions);

};

const getInputValueMono = () => {
    var dimensions = document.getElementById("dimension").value;
    createSquares(dimensions);
    monochrome(dimensions);
};

random.addEventListener("click", getInputValueColor);
mono.addEventListener("click", getInputValueMono);

const resets = () => {
    container.innerHTML = "";
    var dimensions = document.getElementById("dimension").value;
    createSquares(dimensions);
    random.style.backgroundColor = "";
    random.style.padding = "";
    random.style.borderRadius = ""
    mono.style.backgroundColor = "";
    mono.style.padding = "";
    mono.style.borderRadius = "";
}

reset.addEventListener("click", resets);


