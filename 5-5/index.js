//Blocking code
window.setTimeout(() => {
  //   alert("Hi");
}, 10000);
//Non-blocking code
let checkPromise = new Promise((resolve, reject) => {
  let x = true;
  if (x) {
    resolve("everything is cool");
  } else {
    reject("sorry it is not cool");
  }
});

checkPromise
  .then((message) => {
    console.log(`I am then and ${message}`);
  })
  .catch((message) => {
    console.log(`I am catch and ${message}`);
  });
/////////////
// Promisify setTimeout
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
let ms = 3000;
delay(ms).then(myFunction);

function myFunction() {
  let text = document.querySelector(".text");
  text.innerHTML = `It took me ${ms} ms to be done.`;
}
