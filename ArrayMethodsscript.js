/* 
Array Methods
map()--loop over the array and returns new array based on the value return
every()--return true or false if every element in array satisfy the condition
filter()--return new array with all elements that satisfy the condition
some()---return true if at least one element in the arry satisfy 
sort()--sort the elements of teh array
reduce()--this method reduces the array to a single value
forEach()-----
*/

let arr = [1, 2, 5, 4];

/*
arr.methodName(function(currentItem, index, actualArray){
})
*/

//map
let newArr = arr.map(function (item, index, array) {
  return item * 2;
});
console.log(arr);
console.log(newArr);

//filter
let newFilter = arr.filter(function (item, index, array) {
  return item > 2;
});
console.log(newFilter);

//every()--it checks the all elements matches the condition or not
let arr1 = [1, 2, 5, 4];
let everyBoolean = arr1.every(function (item, index, array) {
  return item >= 1;
});
console.log(everyBoolean);

//some()--it checks the any one of the elements matches the condition or not
let arr2 = [1, 2, 5, 4];
let someBoolean = arr1.some(function (item, index, array) {
  return item == 2;
});
console.log(someBoolean);

//sorting of String
let namesArray = ["siva", "srivalli", "viswanadham", "parvathi"];
console.log(namesArray.sort());

//sorting of Number
let newNumbersArray = [1, 2, 9, 4, 8];
console.log(newNumbersArray.sort());

let assendingArray = newNumbersArray.sort(function (a, b) {
  return a - b;
});
console.log(assendingArray);

let desendingArray = newNumbersArray.sort(function (a, b) {
  return b - a;
});
console.log(desendingArray);

/* 
reduce method
arry.reduce(function(total, currentvalue, index, array){
}, initialValue)
*/

let sumofReduceNum = [12, 7, 30];
let result = sumofReduceNum.reduce(function (total, currentItem) {
  return total + currentItem;
}, 0);

console.log(result);
