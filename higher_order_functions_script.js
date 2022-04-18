/* Functional Programming and Higher Functional Programming  */
function y(x) {
  console.log("Y");
  x();
}

y(function () {
  console.log("X");
});

var radius = [3, 1, 2, 4];

//Approach 1
let calculateArea = (radius, formula) => {
  let output = [];
  for (let index = 0; index < radius.length; index++) {
    output.push(Math.PI * radius[index] * radius[index]);
  }
  return output;
};

//console.log(calculateArea(radius));

let area = (radius) => {
  return Math.PI * radius * radius;
};

let circumtense = (radius) => {
  return 2 * Math.PI * radius;
};

let diameter = (radius) => {
  return 2 * radius;
};

//Approach 2
Array.prototype.calculate = (formula) => {
  let output = [];
  for (let index = 0; index < this.length; index++) {
    output.push(formula(this[index]));
  }
  return output;
};

console.log(radius.calculate(area));
console.log(radius.calculate(circumtense));
console.log(radius.calculate(diameter));

console.log(radius.map(area));
