function change() {
  window.document.getElementsByName("h1")[0].outerHTML =
    "<h6> Hi this is my numbers</h6>";
  let newBox = window.document.getElementById("main");
  newBox.style.backgroundColor = "green";
}
const multiply = () => {
  let userNum = document.querySelector("#num").value;
  let x = "";
  for (let i = 0; i <= 10; i++) {
    x += `${i} * ${userNum} = ${i * userNum} <br>`;
  }
  window.document.querySelector(".result").innerHTML = x;
};
window.alert("guess the number between 1-10");
let x = window.prompt("enter your number", "1");
console.log(x);
