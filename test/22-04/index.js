document.write("Hi, I am yaman");
document.write("<h1>DCI</h1>");

// ------
const create = () => {
  let newElement = document.createElement("div");
  let newText = document.createTextNode("I am yaman");
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
  //   document.newElement.backgroundColor = "red";
};
const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  console.log(userInput);
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput);
  newLi.appendChild(text);
  document.querySelector(".result").appendChild(newLi);
  document.querySelector("#userText").value = "";
};
