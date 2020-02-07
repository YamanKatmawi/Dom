// // function input(name, age, add) {
// //   let text = `Hallo ${name}, how old ${age}, what is your ${add}`;
// //   return text;
// // }
// // let name = "ahmad";
// // //console.log(input(name));
// // console.log(input("ahmad", 22, "xxx str"));
// // /////

// // console.log(1);
// // console.log(2);
// // console.log(3);
// // console.log(4);

// // for (i = 1; i < 5; ) {
// //   console.log(i);
// //   i++;
// //   /**
// //    * i = 1 / 1 < 5(true)
// //    * console.log(1)
// //    * i = 9 9<10
// //    * console.log(i)
// //    *
// //    *
// //    */
// // }
// // for (let i = 0; i <= 10; i++) {
// //   console.log(i);
// // }
// // //////////////
// // let arrNumber = [9, 5, 8, 4, 5, 6];
// // //index arrNumber = 0,1,2,3,4,5
// // console.log(arrNumber);
// // console.log(arrNumber.length);
// // ///
// // let arrText = ["hi how are you", "other value"];
// // console.log(arrText[0][2]);
// // console.log(arrText.length);
// ////
// let text1Arr = "Hellokkkkkkkaalskaljdlsks";
// let result1 = text1Arr.split("");

// console.log(result1);
// console.log(result1.length);

// // console.log(result1[0]);
// // console.log(result1[1]);
// // console.log(result1[2]);
// // console.log(result1[3]);
// // console.log(result1[4]);

// for (i = 0; i < result1.length; i++) {
//   console.log(result1[i]);
// }
// // console.log(result1);
// let goIt = text1Arr.slice(5, 15);
// console.log(goIt);
// ////
// var str = "Hello World!";
// var n = str.length;
// console.log(n);
// /////if ...else
// let text2 = "Blue";
// if (text2 === "Red") {
//   console.log("I love it");
// } else {
//   console.log("I don't liked");
// }
// //////
// //&& ||
// let computer = "liked";
// let monitor = "no";

// if (computer === "liked" && monitor === "yes") {
//   console.log("i'm happy");
// } else {
//   console.log("I'm not happay");
// }
// console.log(computer === "liked" && monitor === "yes");
// /////
// let handy = "sony";
// let handy1 = "Howoge";
// let handy2 = "Iphon";
// if ((handy === "sony" && handy1 === "samsung") || handy2 === "Iphon") {
//   console.log("I will come to Berlin");
// } else {
//   console.log("I will back to Aleppo");
// }

// console.log((handy === "sony" && handy1 === "samsung") || handy2 === "Iphon");
// ////
// /**
//  *
//  *
//  */
function berlinCity(num, x) {
  let people = num;
  let cars = x;
  if (people === 3 || cars === 6) {
    console.log("It is right");
  } else {
    console.log("It is not right");
  }
}
berlinCity(3, 5);

let x = 6;
if (x > 2) {
  console.log("If");
} else if (x > 5) {
  console.log("elfe if 1");
} else if (x > 6) {
  console.log("elfe if 2");
} else {
  console.log("else");
}
///////
function aleppoCity(x, y) {
  let people = x;
  let bilding = y;
  if (people === 5 && bilding === 6) {
    console.log("It is very nice");
  } else {
    console.log("It is very bad");
  }
}
aleppoCity(5, 6);
//////
var str = "Hello World!";
var n = str.length;
console.log(n);
//
let arrText = ["hi how are you", "other value"];
console.log(arrText[1]);
/////
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
console.log(testLessThan(26));
////
function testLessOrEqual(val) {
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }
}
console.log(testLessOrEqual(24));
////
const name1 = "yaman";
const age1 = 30;
result = `my name is ${name1} and my old is ${age1}`;
console.log(result);
////
const s = "Hallo world";
console.log(s.toUpperCase());
console.log(s.toLocaleLowerCase());
console.log(s.substring(2, 5));
console.log(s.length);
console.log(typeof s);
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(" "));
console.log(s.split(", "));
//////
//Arrays
const name = ["Nazmy", "Yaman", "Ahmad"];
name[3] = "Homam";
name.push("Haider");
name.unshift("Ali");
name.pop();
name.shift("");
console.log(name);
console.log(name.indexOf("Yaman"));
///
//Object
const person11 = {
  firstName: "yaman",
  lastName: "Katmawi",
  age: 32,
  work: "student",
  hobbies: ["sport", "sleep"],
  address: {
    city: "Berlin",
    street: "xxx str"
  },
  person11: (email = "sssss@msn.com")
};
console.log(person11);
console.log(person11.address.city);
console.log(person11.firstName, person11.lastName);
////
// Arrays with Object
const todos = [
  {
    id: 1,
    text: "You will do it",
    isCompleted: true
  },
  {
    id: 2,
    text: "You will never do it",
    info: "you are so sweet",
    isCompleted: true
  },
  {
    id: 3,
    text: "You will going to syria",
    isCompleted: false
  }
];
console.log(todos);
console.log(todos[2].text);
console.log(todos[1].info);
///
for (let i = 0; i < todos.length; i++) {
  //console.log(todos[i].id);
  console.log(todos[i].text, todos[i].id);
}
///////
const x1 = 26;
if (x1 === 4) {
  console.log("it is good");
} else if (x1 === 25) {
  console.log("it is bad day");
} else {
  console.log("it is verrrrrrry crazy");
}
