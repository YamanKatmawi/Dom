let menu = document.querySelectorAll(".menuItem");
menu.forEach(function (item) {
  console.log(item);

  item.addEventListener("click", function () {
    console.log(this);
    menu.forEach((i) => (i.style.backgroundColor = "blue"));
    this.style.backgroundColor = "red";
  });
});
