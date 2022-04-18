/*        Arrow Function

function getName(){
    return "Siva";
}


getName=()=>{
    return "Siva"
}

getName=()=>"Siva"

Arrow functon automatically bind (this) to the sorrounding codes context

*/

/*
function sum(data) {
  let sum = data + 10;
  return sum;
}
*/

/*
let sum = (data) => {
  let sum = data + 10;
  return sum;
};
console.log(sum(4));
*/

/*
let sum = (data) => {
  return data + 10;
};
console.log(sum(4));
*/

/*
let sum = (data) => data + 10;
console.log(sum(4));
*/

/*
let arr = [1, 2, 6, 9];
let arr1 = arr.map((item) => item * 2);
console.log(arr1);
*/
let obj = {
  name1: "Siva",
  getName: function () {
    console.log(this.name1);
    function fullName() {
      console.log(this.name1);
      console.log("My Full Name is " + this.name1 + " narayana");
    }
    fullName();
  },

  /*
  Problem with normal functions
  let fullName = () => {
      console.log(this.name1);
      console.log("My Full Name is " + this.name1 + " narayana");
    };
    fullName();
  }, */
};

obj.getName();
