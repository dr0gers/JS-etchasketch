let grid = document.querySelector(".grid");
let userInput = document.getElementById("quantity");
let resetButton = document.querySelector(".reset");

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        grid.appendChild(cell);
    };
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
   event.target.classList.replace("grid-item", "color-change");
});

updateGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty('grid-template-columns', `repeat(${userInput.value}, 1fr)`);
    grid.style.setProperty('grid-template-rows', `repeat(${userInput.value}, 1fr)`);
    for (let i = 0; i < userInput.value * userInput.value; i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        grid.appendChild(cell);
    }
    console.log(userInput.value);
};

userInput.addEventListener('change', updateGrid);

resetButton.addEventListener("click", function() {
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty('grid-template-columns', `repeat(16, 1fr)`);
    grid.style.setProperty('grid-template-rows', `repeat(16, 1fr)`);
    createGrid();
});

createGrid();

/*Below is attempt to get backgoundColor to randomly on mouseover of grid-items. 
let cube = document.getElementsByClassName('grid-item');

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
};

function setBg() {
    let cube = document.getElementsByClassName('grid-item');
    cube.setAttribute("backgroundColor", `${random_bg_color()}`);
};

for (let i = 0; i < cube.length; i++) {
    cube[i].onmouseover = function() {
        setBg();
    }
};

square.style.backgroundColor = `${random_bg_color()}`;

square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("grid-item", "rando-color");
});

square.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = `${random_bg_color()}`;
});*/