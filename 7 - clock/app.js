const hourHand = document.querySelector('.hand-hours');
const minuteHand = document.querySelector('.hand-minutes');
const secondHand = document.querySelector('.hand-seconds');

function clockTime(){
    const now = new Date()

    const seconds = now.getSeconds() 
    const secondDerece =((seconds / 60) * 360 ) +90
    secondHand.style.transform =`rotate(${secondDerece}deg)`
  
    const minutes = now.getMinutes()  
    const minutesDerece =((minutes / 60) * 360) + 90
    minuteHand.style.transform =`rotate(${minutesDerece}deg)`

    const hours = now.getHours() 
    const hoursDerece =((hours / 12) * 360 ) + 90
    hourHand.style.transform =`rotate(${hoursDerece}deg)`
    
}
   setInterval(clockTime, 1000);
 