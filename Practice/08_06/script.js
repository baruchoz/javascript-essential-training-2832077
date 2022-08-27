/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

const addPack = (currentPack) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
  <h1>${currentPack.name}</h1>
  <ul>
  <li>Volume: ${currentPack.volume}</li>
  <li>Color: ${currentPack.color}</li>
  <li>Number of pockets: ${currentPack.pocketNum}</li>
  </ul>
  `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(addPack(greenPack));

function addClass(tag, className) {
  const newClass = document.querySelector(tag).classList.add(className);
  return newClass;
}
addClass("main", "secondary");

// const createHeader = function () {
//   const newHeader = document.createElement("h1");
//   return newHeader;
// };
// main.prepend(createHeader());

const elementBackgroundColor = (el, color) => {
  const element = document.querySelector(el);
  return (element.style.backgroundColor = color);
};

console.log(elementBackgroundColor("li", "grey"));
elementBackgroundColor("article", "blue");
