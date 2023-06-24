const myForm = document.querySelector("#myForm");
const inputBox = document.getElementById("inputBox");
const myAlert = document.getElementById("myAlert");
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  validator();
});
// 1. 9 rakam ve 2 tire olduğunu kontrol edelim
function validator() {
  const ssn = inputBox.value.split("-");
  console.log(inputBox.value);
  console.log(ssn);
  // match bir string içerisinde regexp ile belirtilen aralıktaki
  //   değerleri bir array haline getiriyor
  if (
    ssn.length == 3 &&
    inputBox.value.match(/[0-9]/gi).length == inputBox.value.length - 2 &&
    ssn[0].length == 3 &&
    ssn[1].length == 2 &&
    ssn[2].length == 4 &&
    ssn[0] != "000" &&
    ssn[0] != "666" &&
    +ssn[0] < 900 &&
    ssn[1] != "00" &&
    ssn[2] != "0000"
  ) {
    myAlert.innerHTML = `Entered ssn ${inputBox.value} is valid`;
  } else {
    myAlert.innerHTML = "ssn must be 11 character (9 numbers and 2 hyphen)";
  }
  setTimeout(function () {
    myAlert.innerHTML = "";
  }, 3000);
  inputBox.value = "";
}
