/* Events
   HTML Event Handler attribute --onclick onchange onmouseover onkeyup

   Event Listener
   addEventListener()--register an event listener
   removeEventListener()-remove an event listener

 */

function firstHandler() {
  console.log("firstHandler");
  demo.removeEventListener("mousemove", handler);
}

let btn = document.querySelector("button");
btn.addEventListener("click", firstHandler);

let demo = document.querySelector(".demo");
demo.addEventListener("mousemove", handler);
function handler() {
  demo.innerHTML = Math.random();
}

/* Event Propagation */
