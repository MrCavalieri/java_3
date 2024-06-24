function changeColorToBlack(event) {
  event.target.style.backgroundColor = "black";
}

const blueDiv = document.getElementById("blue");
const redDiv = document.getElementById("red");
const greenDiv = document.getElementById("green");
const yellowDiv = document.getElementById("yellow");
const keyDiv = document.getElementById("key");
let globalColor = "";

blueDiv.addEventListener("click", changeColorToBlack);
redDiv.addEventListener("click", changeColorToBlack);
greenDiv.addEventListener("click", changeColorToBlack);
yellowDiv.addEventListener("click", changeColorToBlack);

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    globalColor = "pink";
    keyDiv.style.backgroundColor = globalColor;
  } else if (event.key === "s") {
    globalColor = "orange";
    keyDiv.style.backgroundColor = globalColor;
  } else if (event.key === "d") {
    globalColor = "skyblue";
    keyDiv.style.backgroundColor = globalColor;
  } else if (event.key === "q") {
    createColoredDiv("purple");
  } else if (event.key === "w") {
    createColoredDiv("gray");
  } else if (event.key === "e") {
    createColoredDiv("brown");
  }
});

function createColoredDiv(color) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("color-box");
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
}
