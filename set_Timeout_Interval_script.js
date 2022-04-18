/*  
set Timeout
Window method object
sets the timer and execute a call back function after the timer expires

set interval
Window method object
repetedly calls a function with a fixed time delay between each call


*/

let timerId = window.setTimeout(function () {
  console.log("setTimeout calling every 5000");
}, 2000);
console.log(timerId);
clearTimeout(timerId);

let intervalId = window.setInterval(function () {
  console.log(1);
}, 3000);
clearInterval(intervalId);
