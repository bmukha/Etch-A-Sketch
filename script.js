const mainContainer = document.querySelector("#main-container");

function fillTheGrid(number = 16) {
  mainContainer.innerHTML = "";
  mainContainer.style.cssText = `grid-template-columns: repeat(${number}, 1fr);
      grid-template-rows: repeat(${number}, 1fr);`;
  let numSquare = number * number;
  for (let i = 0; i < numSquare; i++) {
    let newDiv = document.createElement("div");
    newDiv.addEventListener(
      "mouseleave",
      () => (newDiv.style.backgroundColor = "green")
    );
    mainContainer.appendChild(newDiv);
  }
}

fillTheGrid();

const resetBtn = document.querySelector("#btn-reset");
resetBtn.addEventListener("click", () => {
  let newSize = "";
  do {
    newSize = prompt("Enter new size between 1 and 100", "");
  } while (+newSize < 1 || newSize > 100);
  fillTheGrid(newSize);
});
