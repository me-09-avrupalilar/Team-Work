const myForm = document.querySelector("#myForm");
const inputBox = document.getElementById("inputBox");
const myAlert = document.getElementById("myAlert");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = inputBox.value;
  const digits = numberToDigit(inputValue);

  //! 34444185856 string e donusur
  //! [1,4,5,6]
  const tenthDigit =
    ((digits[0] + digits[2] + digits[4] + digits[6] + digits[8]) * 7 -
      (digits[1] + digits[3] + digits[5] + digits[7])) %
    10;

  // digits.push(tenthDigit);
  // const tenthDigit= digits.reduce((a,b)=>a+b)
  // console.log(tenthDigit)

  // const eleventhDigit =
  //   (digits[0] +
  //     digits[1] +
  //     digits[2] +
  //     digits[3] +
  //     digits[4] +
  //     digits[5] +
  //     digits[6] +
  //     digits[7] +
  //     digits[8] +
  //     tenthDigit) %
  //   10;

  const eleventhDigit = (digits.reduce((a, b) => a + b) - digits[10]) % 10;
  console.log(eleventhDigit);
  // digits.push(eleventhDigit);

  if (
    tenthDigit === digits[9] &&
    eleventhDigit === digits[10] &&
    digits[0] > 0
  ) {
    myAlert.innerHTML = `${inputValue} is a valid TR ID`;
  } else {
    myAlert.innerHTML = `${inputValue} is not a valid TR ID`;
  }
  // setTimeout(function () {
  //   myAlert.innerHTML = "";
  // }, 3000);
  inputBox.value = "";
});

function numberToDigit(num) {
  const numberStr = num.toString(); //! 34444185856 string e donusur
  const digitsArray = numberStr.split(""); //! [ "3", "4", "4", "4",  "4",  "1",  "8",  "5",  "8",  "5", "6"]  her bir ifadeyi array icerinde ayirdik.
  const digits = digitsArray.map(function (digit) {
    return parseInt(digit);
  });

  console.log(digits);
  return digits;
}
// !!--------------------------------------------------------------
// !!--------------------------------------------------------------
// !!--------------------------------------------------------------
// !!--------------------------------------------------------------
// ! UZUN YOL primitive yol
// const num = prompt("Please Enter Your TR ID");

// function numberToDigit(num) {
//   const numberStr = num.toString(); //! 34444185856 string e donusur.
//   const digitsArray = numberStr.split(""); //! [ "3", "4", "4", "4",  "4",  "1",  "8",  "5",  "8",  "5", "6"]  her bir ifadeyi array icerinde ayirdik.
//   const digits = digitsArray.map(function (toDigits) {
//     return parseInt(toDigits); //! [3, 4, 4, 4, 4, 1, 8, 5, 8, 5, 6] artik number a donustu
//   });

//   return digits;
// }

// const a = numberToDigit(num);
// // console.log(a)
// //!  girilen sayi digitlere ayriliyor. artik indexleme ile ulasabilirm

// const tenthDigit =
//   ((a[0] + a[2] + a[4] + a[6] + a[8]) * 7 - (a[1] + a[3] + a[5] + a[7])) % 10;

// const eleventhDigit =
//   (a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + tenthDigit) %
//   10;

// if (tenthDigit == a[9] && eleventhDigit == a[10] && a[0] > 0) {
//   console.log(`${num} is a valid TR ID`);
// } else {
//   console.log(`${num} is not a valid TR ID`);
// }
