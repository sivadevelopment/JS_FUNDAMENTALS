/*   
Spread Operator
The operator shape is three consecutive dots (...)
Expanding String String-- conveting string into list of arrays
Combaining Arrays-- combaining an array or add value to array
Combaining Objects-- combaining an object or add value to the object
Creating new Shallow copy of Arrays and objects
*/

// 1. Under standing array
var arr = [10, 2, 30];
console.log(arr);
//Array Index always starts with 0
console.log(arr[0]);
arr.push("A");
arr.push(true);
console.log(arr);

//2. Under Standing object
let obj = {
  name: "Siva",
  job: "Soft ware",
  "full name": "siva nnarayana",
  objchild: {
    name: "Datansh",
    job: "Playing",
  },
};

//object properties alaways stores as key value pair(Map)
console.log(obj);
console.log(obj.name);
console.log(obj["name"]);
console.log(obj.objchild.name);

//When to use array notation than dot notation
console.log(obj["full name"]); //--- when ever property has a space in between

//how to add one more property to the object
obj.hobbies = "cricket";
console.log(obj);

//Spread concepts
// 1-- Expanding String
let greating = "Welcome to programing world";
let charGreeatingList = [...greating];
console.log(charGreeatingList);

//Combaining Array
let arr1 = ["amezon", "facebook"];
let arr2 = ["facebook", "whatsapp"];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//adding an element to the array
let arr4 = ["a", "b", "c"];
let arr5 = ["d", ...arr4];
console.log(arr5);

//Combaining Objects
let obj1 = { name: "Srivalli", role: "JE", dateOfBirth: "14/03/1993" };
let obj2 = { name: "Siva", role: "SE", next: "next to  hi" };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//Shallow Copy
//Exsisting Problem--As per call by referense
let arr6 = [1, 2, 3, 4, 5];
let arr7 = arr6;
arr7.push(6, 7, 8);
console.log(arr7);
console.log(arr6);

let arr8 = [...arr7];
arr8.push(9);
console.log(arr8);
console.log(arr7);

//Nested Copy
let arr9 = [
  { name: "Siva", job: "SE" },
  { name: "Siva1", job: "JE" },
];

let arr10 = [...arr9];
console.log(arr10);
arr9[0].name = "Super Man";
console.log(arr10);

//Hack for nested copy
let arr11 = JSON.parse(JSON.stringify(arr9));
arr9[0].name = "Diper Man";
console.log(arr11);
