let ele = document.querySelector("#second").previousElementSibling;
console.log(ele);
// console.log(ele.id);
let ele2 = document.querySelector("body").previousSibling;
console.log(ele2);
// firstChild
let mainText = document.getElementById("text").firstChild;
console.log(mainText.nodeName);
let text = document.querySelector("span");
let closestElement = text.closest(".cool");
console.log(closestElement);

//matches
let names = document.querySelectorAll("li");
names.forEach((name) => {
  if (name.matches(".teacher")) {
    console.log(`${name.textContent} is the teacher for FBW26`);
  }
});
//////
let allChildren = document.querySelector("body").children;
console.log(allChildren);
////
let heading = document.querySelector("h1");
heading.style.backgroundColor = "red";
//////

let menuList = document.getElementById("menu");
console.log(menuList.lastElementChild);
