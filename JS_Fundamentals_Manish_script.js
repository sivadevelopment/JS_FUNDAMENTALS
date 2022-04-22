const student = {
  sName: "Jhon",
  age: 23,
  isPresent: true,
  fees: undefined,
  leaves: [1, 2, 4, 6],
  address: {
    street: "east",
    district: "ap",
  },
};

const student1 = {
  sName: "Jhon",
  age: 23,
  isPresent: true,
  fees: undefined,
  leaves: [1, 2, 4, 6],
  address: {
    street: "east",
    district: "ap",
  },
};

console.log(Object.entries(student));
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(student.sName);
console.log(student["sName"]);

delete student.fees;
console.log(Object.entries(student));
console.log(student.leaves[0]);

const studenArray = [student, student1];
console.log(studenArray[0].address.street);
console.log(studenArray[0].address.district);

console.log(JSON.stringify(studenArray));

console.log(`My name is ${student.sName} and my age is ${student.age}`);

//collection of sattements that are executed to do some specific task
function greet() {
  console.log("Hello");
}

greet();

const greet1 = function () {
  console.log("Hello1");
};

greet1();

const greet2 = () => {
  console.log("Hello2");
};
greet2();

const addStudent = () => {};

const student4 = {
  sName: "Jhon",
  age: 23,
  isPresent: true,
  fees: undefined,
  leaves: [1, 2, 4, 6],
  address: {
    street: "east",
    district: "ap",
  },
};

//For in loop
for (let prop in student4) {
  console.log(`${prop} : ${student4[prop]}`);
}
/*
we can't return inside for each
array.forEach(element => {
  
});
*/

const student6 = [
  {
    sName: "Jhon",
    age: 23,
    isPresent: true,
    fees: undefined,
    leaves: [1, 2, 4, 6],
    address: {
      street: "east",
      district: "ap",
    },
  },
];

const student7 = [
  {
    sName: "Jhon11",
    age: 23,
    isPresent: true,
    fees: undefined,
    leaves: [1, 2, 4, 6],
    address: {
      street: "east",
      district: "ap",
    },
  },
];

const student5 = {
  sName: "Jhon",
  age: 23,
  isPresent: true,
  fees: undefined,
  leaves: [1, 2, 4, 6],
  address: {
    street: "east",
    district: "ap",
  },
};

let studentArr = [...student6, student5];
console.log(studenArray);
let studentArr1 = [...student6, student7];
console.log(`spred:: ${studentArr1}`);
console.log(JSON.stringify(studentArr1));

//Object Destructuring
let [a, b] = studentArr;
console.log(a);
console.log(b);

const s1 = {
  sName: "Jhon",
  age: 23,
  isPresent: true,
  fees: undefined,
  leaves: [1, 2, 4, 6],
  address: {
    street: "east",
    district: "ap",
  },
};

const s2 = {
  address: {
    street: "east",
    district: "ap",
  },
};

const s3 = { ...s1, s2, age: 30 };
console.log(s3);

const { sName, age } = s3;
console.log(sName, age);

//Before ES6 -- we don't need to write function constructor rather we can use ES6 class
function Student(name, age) {
  (this.name = name), (this.age = age);
  this.greet = function () {
    console.log(`Hello ${this.name}`);
  };
}

Student.prototype.getAge = function () {
  return this.age;
};

let stOb1 = new Student("siva", 29);
console.log(stOb1);
console.log(stOb1.greet());
console.log(stOb1.getAge());

class StudentST {
  constructor(name, age) {
    (this.name = name), (this.age = age);
    this.greet = function () {
      console.log(`Hello ${this.name}`);
    };
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }

  getAge() {
    return this.age;
  }
}

//Working with Dom
