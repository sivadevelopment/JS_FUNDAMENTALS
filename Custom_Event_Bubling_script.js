/*
Event propagation explains the order in which events are received
There are two main event modes
Event bubling
Event capturing

Event flow 
----------------->
Event starts from most specific element and flows upwords
Document 
Element HTML
Element Body
Element div
Element button  
*/

/* 
Cusom Event


*/

document.addEventListener("hello", function (data) {
  console.log("My custom event calling :: ", data.detail.name);
});

function callCustomMethod() {
  let event = new CustomEvent("hello", {
    detail: { name: "siva" },
  });
  document.dispatchEvent(event);
}
