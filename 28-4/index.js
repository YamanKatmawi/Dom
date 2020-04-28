let divText = document.querySelector(".text");
const print = () => {
  divText.innerText = "Hi I am onclick from Html";
};
//////
let btn = document.getElementById("more");
btn.onclick = function () {
  divText.innerText = "Hi I am yaman";
};
function myFunction() {
  header.style.backgroundColor = "white";
}
////
//Mouse Events :
//click , mouseenter, mouseleave
let header = document.querySelector("h1");
header.addEventListener("mouseover", () => {
  header.style.backgroundColor = "red";
});
header.addEventListener("mouseleave", myFunction);
///////
function keyUpFunction(e) {
  this.style.backgroundColor = "pink";
  console.log(e);
  if (e.code == "KeyS") alert("You are cool");
  // if (e.code == "Enter") addToList();
}
function keyPressFunction(e) {
  this.style.backgroundColor = "white";
}
function keyDownFunction(e) {
  this.style.backgroundColor = "yellow";
}
//Keyboard Events
//Keydown, Keyup

let userInput = document.querySelector("#userInput");
userInput.addEventListener("keyup", keyUpFunction);
userInput.addEventListener("keydown", keyDownFunction);
userInput.addEventListener("keyPress", keyPressFunction);
