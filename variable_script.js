/*  Var Can be updated and Re declered
Var support fuction Scope
Var not supports block scope 
Var supports global cope*/
var course = "LWC";
var cource = "Java";
console.log("I am Loading");
console.log(cource);
console.log(window);
console.log(this);

function myFunction() {
  var functionCource = "Java functionCource";
  console.log(functionCource);
}
//console.log(functionCource);

{
  x = 10;
  console.log(x);
}

console.log(x);
console.log(window.x);

/*  let Can be updated but  Re-declered not supported
Let support fuction Scope
 Let supports block scope 
 Ler Not supports global cope */

let letCourse = "JAVAA";
//let letCourse = "JAVAA 2";
console.log(letCourse);
letCourse = "JAVAA Updated";
console.log(letCourse);
console.log(window.letCourse);

function letAcb() {
  let y = 10;
}
//console.log(y);
{
  let z = 10;
}
// console.log(z);

/*  const Can't be updated and  Re-declered
const support fuction Scope
 const supports block scope 
 const Not supports global cope */

const constCourse = "JAVAA";
console.log(constCourse);
//constCourse = "JAVAA Updated YYYY";
