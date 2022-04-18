/*  Destructuring */
/*
The two most used data stactures in javascript are object and array
Destructuring is a special syntax that allow us to unpack arrays or objects into bunch of variables 
Array Destructuring
Object Destructuring
*/

let arr = ["amazon", "google"];
//let company1 = arr[0];
//let company = arr[1];
//console.log(company1)

let [company1, company] = arr;
console.log(company);
console.log(company1);

let option = {
  name: "Siva",
  role: "SE",
};

//let name = option.name

let { name, role } = option;
console.log(name);
console.log(role);
