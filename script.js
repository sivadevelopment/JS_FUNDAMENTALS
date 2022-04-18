/* map filter reduce (higher order functions)*/

let arr = [5, 1, 3, 2, 6];

// map Transform
// Double every element in the array or tripple every element in the array

let doubleArr = arr.map((item) => {
  return item * 2;
});
console.log(doubleArr);

let trippleArr = arr.map((item) => {
  return item * 3;
});
console.log(trippleArr);

let evenarr = arr.filter((item) => {
  return item % 2 == 0;
});

console.log(evenarr);

let oddArr = arr.filter((item) => {
  return item % 2 == 1;
});
console.log(oddArr);

function findSum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  return sum;
}

console.log(findSum(arr));

let sumOfArr = arr.reduce((count, item) => {
  return count + item;
}, 0);
console.log(sumOfArr);

let findMaxArr = arr.reduce((max, item) => {
  if (item > max) {
    max = item;
  }
  return max;
}, 0);
console.log(sumOfArr);
console.log(findMaxArr);
