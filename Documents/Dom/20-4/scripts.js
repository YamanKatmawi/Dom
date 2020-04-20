function change() {
  window.document.getElementsByTagName("h1")[0].outerHTML =
    "<h6> Hi, this is me </h6>";
  let newBox = window.document.getElementById("main");
  newBox.style.backgroundColor = "red";
}
const multiply = () => {
  let userNum = document.querySelector("#num").value;
  //   console.log(userNum);
  let x = "";
  for (let i = 0; i <= 10; i++) {
    x += `${i} * ${userNum} = ${i * userNum} <br>`;
  }
  window.document.querySelector(".result").innerHTML = x;
};
