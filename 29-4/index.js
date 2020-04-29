function redBg() {
  this.style.backgroundColor = "red";
}

function whiteBg() {
  this.style.backgroundColor = "white";
}

function newUser() {
  result.innerHTML += "Hi this is you";
}

let header = document.querySelector("h1");
let result = document.querySelector(".result");
header.addEventListener("mouseover", redBg);
header.addEventListener("mouseleave", whiteBg);

function windowLoad() {
  // setInterval(newUser, 1000);
  alert("Hi new person");
}

const stop = () => {
  header, removeEventListener("mouseover", redBg);
  header, removeEventListener("mouseleave", whiteBg);
};
function changeColor() {
  event.preventDefault();
  form.style.backgroundColor = "pink";
}

window.addEventListener("load", windowLoad);

let form = document.querySelector("form");
form.addEventListener("submit", () => {
  alert("Thanks for your feedback");
});
form.addEventListener("reset", () => {
  alert("your Input has been cleared out");
});
///
function numberMu() {
  let result = num1.value + num2.value;
  console.log(num1);
  document.getElementById("sumResult").value = result;
}

let num1 = document.getElementById("firstNumber");
// num1.addEventListener("keyup", numberMu);
console.log(num1);
let num2 = document.getElementById("secondNumber");

console.log(num2);
// num2.addEventListener("keyup", numberMu);
