import { data } from "./data.js";
console.log(data);
let parsedData = JSON.parse(data);
console.log(parsedData);
const section = document.querySelector("#Movie");
parsedData.forEach((obj) => {
  console.log(obj);
  let { ingredients, image, title, id } = obj;
  //console.log(id);
  let ing = ingredients.map(
    (item) => `
  <h5>${item}</h5>`
  );
  console.log(ing);
  let card = ` <div id=${id}>
  <img src=${image} alt=${title}>
${ing.join("")} 
 
  </div>
  `;
  section.innerHTML += card;
});
