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

let num1 = document.getElementById("firstNumber");
let num2 = document.getElementById("secondNumber");
console.log(num1);
console.log(num2);

function numberMu() {
  let a = Number(num1.value);
  let b = Number(num2.value);
  document.getElementById("sumResult").value = a + b;
  console.log(num1.value);
  console.log(num2.value);
}
