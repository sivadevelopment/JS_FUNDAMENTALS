/* map filter reduce (higher order functions)*/

let arr = [5, 1, 3, 2, 6];

// map Transform
// Double every element in the array or tripple every element in the array

/*
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
*/

let userArray = [
  {
    firstName: "srivalli",
    lastName: "naga",
    age: 16,
  },
  {
    firstName: "siva",
    lastName: "peddireddi",
    age: 18,
  },
  {
    firstName: "dattanash",
    lastName: "naga",
    age: 10,
  },
  {
    firstName: "sudhir",
    lastName: "venkata",
    age: 16,
  },
  {
    firstName: "manvitha",
    lastName: "reddi",
    age: 18,
  },
  {
    firstName: "manish",
    lastName: "reddi",
    age: 10,
  },
];

let firstnameLastnaeArr = userArray.map((item) => {
  return item.firstName + " " + item.lastName;
});

console.log(firstnameLastnaeArr);

let ageClaArr = userArray.reduce((arr, item) => {
  if (arr[item.age]) {
    arr[item.age] = ++arr[item.age];
  } else {
    arr[item.age] = 1;
  }
  return arr;
}, {});

console.log(ageClaArr);

let filteredByAgeArr = userArray.filter((item) => {
  return item.age > 15;
});
console.log(filteredByAgeArr);
let filteredByAgeArrNames = filteredByAgeArr.map((item) => {
  return item.firstName;
});
console.log(filteredByAgeArrNames);

let filteredByAgeArrNamesReduce = userArray.reduce((arr, item) => {
  if (item.age > 15) {
    arr.push(item.firstName);
  }
  return arr;
}, []);
console.log(filteredByAgeArrNamesReduce);
