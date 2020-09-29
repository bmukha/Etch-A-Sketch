const mainContainer = document.querySelector("#main-container");
for (let i = 0; i < 256; i++) {
  let newDiv = document.createElement("div");
  newDiv.textContent = i + 1;
  mainContainer.appendChild(newDiv);
}
console.log(mainContainer);
