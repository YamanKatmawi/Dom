let avatar = document.querySelector(".img");
console.log(avatar);
// avatar.innerHTML = "cool";
let list = avatar.querySelectorAll("span");
console.log(list);
list.forEach((item) => {
  console.log(item);
  item.innerText = "nice";
  item.style.backgroundColor = "red";
});
// --------
let navList = document.querySelector("#menuList");
console.log(navList);

let specialOnes = navList.querySelectorAll("li[class='highlight']");
console.log(specialOnes);
specialOnes[0].innerText = "Nice one";
// ---------
let moreClass = document.querySelector(".main");
moreClass.classList.add("small");
moreClass.classList.add("textRtl", "flexSize");
let classArr = ["classOne", "classTwo"];

//adding more classes to the div using
moreClass.classList.add(...classArr);
console.log(moreClass.classList);
// ----------
moreClass.style.color = "blue";
moreClass.style.backgroundColor = "gray";
moreClass.style.fontSize = "1.5rem";
moreClass.style.marginLeft = "5rem";
moreClass.style.display = "flex";
moreClass.style.justifyContent = "center";

document.write("HI I am Yaman");
document.write("<h1>coo this is me </h1>");
