/* 
Query Selector
Query Selector All
document.querySelector(selector)
document.querySelectorAll(selector)
*/

let element = document.querySelector("div");
let element1 = document.querySelector("div");
let element2 = document.querySelector("div");
console.log(element);
console.log(element.innerHTML);
console.log(element.innerText);
element.style.color = "red";

let elementAll = document.querySelectorAll("div");
console.log(elementAll);
Array.from(elementAll).forEach((item) => {
  item.style.color = "green";
});
