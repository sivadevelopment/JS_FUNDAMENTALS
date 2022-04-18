/* 
Execution Contaxt 
1) Memory creation(Under Global execution context)

* all the variables values are stored  as undefined  value during memory creation
* all functions are stored with all code during memory creation


2) code execution
   * all the global variable are replaced with it's assigning values
   *  For functions ---if any function invokes it will create mini execution context under global execution context during code execution part
   * 

All execution context can be maintained by call stack
Call stack mainly contain's the Gobal Execution context and local execution context(method calls)
Call stack maintains the order of execution of execution context
*/

/* Hosting In Java Assigning memory allocation to the variables and functions and also assigning default values*/

/*
console.log(x); //Undifined
console.log(getName()); //HII
//console.log(getName1()); // Error getName1(), Because of arrow function it will act as one of the variable
console.log(getName1);


var x = 10;
function getName() {
  console.log("HIII");
}

var getName1 = () => {
  console.log("HII get Name 2");
};

console.log(x); //10
console.log(getName()); //HII
console.log(getName); // It will print hole method

/*
Lexical Environment 
Binding inner function with outer environment is nothing but lexical environment-- local environment + lexical environment of parent and so on
Scope chain--- relating all functions with parent fuction is nothing but scope chain

*/

/*
Let And Const are hosted
var can be accessed before declare
let can't be accessed before declare

console.log(b)--Error
console.log(c)--No Error

let b=10
var c=20

Let and const are hosted(before single line of code executed it will assigned with undifined in separate memory not the global space)
--this phase is called as temporial dead zone
--after hosting before initialization---Temporial dead zone
Let and const are Block scope
*/

/*

var a = 1;
let b = 2;
const c = 3;

console.log(a);
console.log(b);
console.log(c);

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
console.log(b);
console.log(c);

Shadowing

*/

/* 
Closures In JS

function along with it's lexical scope forms a closure

*/

/* 
function x() {
  var a = 7;

  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}

let y = x();
console.log(y);
console.log(y());
*/

/*
function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 2000);
  console.log("Java Script");
}
x();
*/

/*
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  console.log("Java Script");
}
x();
*/

/*
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  console.log("Java Script");
}
*/

/*
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}

x();
*/

/*
setTimeout(() => {
  console.log("Set Time out printing");
}, 5000);

//what is call back function
function x(y) {
  console.log("X");
  y();
}

x(function y() {
  console.log("I am a call back function");
});


function xyz() {
  let count = 0;
  let element = document.querySelector("button");
  element.addEventListener("click", () => {
    console.log("click meeeeee", ++count);
  });
}

xyz();
*/

/* Event Loop */
/* 
Function Statement
Function Expression
Function Declaration
Anonumous Function
Named Function Expression
Differce B/W parameter & argument
First class function-- ability to use function as a value-- First Class Citizens
Arrow Function
*/

/* Function Statement or function declaration*/
function a() {
  console.log(
    "this way of representing function is nothing but Function Statement"
  );
}

/* Function Expression */
//Arrow function tooo
let b = () => {
  console.log(
    "this way of representing function is nothing but Function Statement"
  );
};

//Difference b/w function statement and statement expression---->Hosting

/* Anonumous Function -- this functions comes into the picture where function used as value
//syntax error
function (){
}

let b = () => {
  console.log(
    "this way of representing function is nothing but Function Statement"
  );
};  

*/

function t(r) {
  console.log("t tata");
  r();
}

t(function () {
  console.log("try try try");
});

/* Named Function Expression */
let u = function z() {
  console.log("Named Function Expression");
  //console.log(z());
};
u();
// error z();
