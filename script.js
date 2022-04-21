studentArr = [];
snameglobal = "";

//to store input student values
function addSudents() {
  let sname = document.getElementById("name").value;
  let classLevels = document.getElementById("classLevels").value;
  let course = document.getElementById("course").value;
  let address = document.getElementById("address").value;

  if (!sname) {
    let error = document.getElementById("error");
    error.innerHTML =
      "<span style='color: red;'>" + "Please enter a valid number</span>";
  } else {
    if (this.snameglobal == sname) {
      let inputerror = document.getElementById("inputerror");
      inputerror.innerHTML =
        "<span style='color: red;'>" + "Please enter a different value</span>";
    } else {
      let studentObj = {
        name: sname,
        classLevel: classLevels,
        Course: course,
        Address: address,
      };
      this.studentArr.push(studentObj);
      this.snameglobal = sname;
      let lsize = document.getElementById("lsize");
      lsize.innerHTML = `<span style='color: red;'>Total Number of Students :: ${studentArr.length}</span>`;
      console.log(studentArr);
    }
  }
}

//To Clear Input Values
function clearInputs() {
  sname = document.getElementById("name").value;
  if (!sname) {
    let error = document.getElementById("errorclear");
    error.innerHTML =
      "<span style='color: red;'>" + "Please enter a valid number</span>";
  } else {
    document.getElementById("name").value = " ";
    document.getElementById("classLevels").value = " ";
    document.getElementById("course").value = " ";
    document.getElementById("address").value = " ";
  }
}

//To Clear validation Errors
function addClearError() {
  const elementError = document.getElementById("error").innerHTML;
  if (elementError) {
    const element = document.getElementById("error");
    element.innerHTML = " <span id='error'></span>";
  }

  const elementClearError = document.getElementById("errorclear").innerHTML;
  if (elementClearError) {
    const elementClear = document.getElementById("errorclear");
    elementClear.innerHTML = " <span id='errorclear'></span>";
  }

  const elementinpuError = document.getElementById("inputerror").innerHTML;
  if (elementinpuError) {
    const elementClear = document.getElementById("inputerror");
    elementClear.innerHTML = " <span id='inputerror'></span>";
  }
}
