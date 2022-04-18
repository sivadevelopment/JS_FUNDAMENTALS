/* 
Object.keys()
Object.values()
Json.stringfy()
Json.parse()
*/

let obj = {
  name: "Siva",
  role: "SE",
  age: 27,
  dob: "23/10/1990",
};

// To know the all keys of the object
console.log(Object.keys(obj));
Object.keys(obj).forEach((element) => {
  console.log(element);
});

// To know the all values of the object
console.log(Object.values(obj));
Object.values(obj).forEach((element) => {
  console.log(element);
});

//Json.stringfy
console.log(JSON.stringify(obj));
let strStringfy = JSON.stringify(obj);

//Json.parse
console.log(JSON.parse(strStringfy));
