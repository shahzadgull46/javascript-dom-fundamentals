const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

const container = document.getElementById("container");

// console.log(container);

function createCurrentColor() {
  const color = document.createElement("p");
  color.id = "current-color";
  color.textContent = "Current Color: ";
  container.appendChild(color);
}
createCurrentColor();
const currentColor = document.getElementById("current-color");

function updateCurrentColor(color) {
  currentColor.textContent = `Current Color: ${color}`;
}
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.dataset.color);
    switch (e.target.dataset.color) {
      case "red":
        body.style.backgroundColor = e.target.dataset.color;
        container.style.color = "white";
        updateCurrentColor(e.target.dataset.color);

        break;
      case "blue":
        body.style.backgroundColor = e.target.dataset.color;
        container.style.color = "white";
        updateCurrentColor(e.target.dataset.color);

        break;
      case "green":
        body.style.backgroundColor = e.target.dataset.color;
        container.style.color = "white";
        updateCurrentColor(e.target.dataset.color);

        break;
      case "yellow":
        body.style.backgroundColor = e.target.dataset.color;
        container.style.color = "black";
        updateCurrentColor(e.target.dataset.color);

        break;
      case "reset":
        body.style.backgroundColor ="white";
        container.style.color = "black";
        updateCurrentColor("white");

        break;

      default:
       

        break;
    }
  });
});
