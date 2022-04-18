/* 
String Methods
includes
indexOf
startsWith
slice
toLowerCase
toUpperCase
trim
*/

let str = "Hello guys doing i hope you are doing good";
//includes().
let check = str.includes("hope");
console.log(str.includes("hope"));
console.log(check);

// Index Off
console.log(str.indexOf("doing"));
console.log(str.indexOf("doing1"));

//startsWith()
console.log(str.startsWith("Hello"));

//Slice()
//method extracts the part of the string and return
console.log(str.slice(0, 5));

//toLowerCase()
console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());

let trimString = "    try to connect ";
console.log(trimString);
//remove white space
console.log(trimString.trim());
