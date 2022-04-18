/* String Interpolation 
String interpolation allows you to embed expession in the Striing
Template String use back-ticks(``) rather than the single or double-quotes
*/

var name = "Salesforce Troop";
var age = 27;
console.log("My name is " + name + " My age " + age);
var jobRole = "SE";
console.log(
  "My name is " + name + " My age " + age + " My job role is " + jobRole
);

//String Interpolation with expression
var a = 10;
var b = 20;

console.log(`Sum of total :: ${a + b}`);
console.log(`My name is :: ${name}`);

var recordId = "123abcd";
console.log(`http://salesforce.com/${recordId}`);
