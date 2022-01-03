const countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();
const showDays = document.querySelector("#days");
const showHours = document.querySelector("#hours");
const showMinutes = document.querySelector("#minutes");
const showSeconds = document.querySelector("#seconds");
const showContent = document.querySelector(".ct_name");

const x = setInterval(function() {
 const now = new Date().getTime();
 const distance = countDownDate - now;
 let days = Math.floor(distance / (1000 * 60 * 60 * 24));
 let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 let seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
 showDays.textContent = days;
 showHours.textContent = hours;
 showMinutes.textContent = minutes;
 showSeconds.textContent = seconds;

 // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
 // + minutes + "m " + seconds + "s ";

 if (distance < 0) {
   clearInterval(x);
   showContent.innerHTML = `<div class="ct_name">Happy New Year!</div>`
 }
}, 1000);