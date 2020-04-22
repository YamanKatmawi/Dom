document.write("hey, this is me");
document.write("<h3>Yaman</h3>");
const create = () => {
  let newElement = document.createElement("div");
  let newText = document.createTextNode("I am yaman");
  //   console.log(newElement);
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};
// ---------
const addToList = () => {
  let userInput = document.querySelector("#userText").Value;
  console.log(userInput);
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput);
  newLi.appendChild(text);
  document.querySelector(".result").appendChild(newLi);
  document.querySelector("#userText").Value = "";
};
