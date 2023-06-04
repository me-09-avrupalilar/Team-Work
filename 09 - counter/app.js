let dakika = prompt("lütfen dakika giriniz");
let saniye = dakika * 60;

const myPar = document.getElementById("par");

setInterval(myFunction, 1000);
// ** fonksiyonun veya iterasyonun çalışma süresini ayarlar.  Setınterval içerisine iki değer alır ilk olarak fonksiyonu yazılır sonrasında itere edeceği süre yazılır..

function myFunction() {
  let minutes = Math.floor(saniye / 60);
  // ! math floor kullanma amacımız her zaman dakikayı tam sayı olarak göstermek ve sayıyı her zaman aşağı yuvarlmak.
  let seconds = saniye % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // ** seconds eğer ondan küçükse 0 stringiyle beraber second ı yazdır yok değilse sadece bana second ı yazdır.
  if (minutes >= "00") {
    myPar.innerHTML = `${minutes} : ${seconds}`;
    saniye--;
  } else {
    myPar.innerHTML = `00:00`;
  }
}
