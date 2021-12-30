let images = [];
let i = 0;
let loop;
images[0] = "img/ap01.jpg";
images[1] = "img/ap02.jpg";
images[2] = "img/ap03.jpg";
images[3] = "img/ap04.jpg";

const slidesAuto = document.querySelector(".slide_auto_wrap img");

function slidesAutoPlay(){
 slidesAuto.src = images[i];
 if(i < images.length - 1){
  i += 1;
 }else{
  i = 0;
 };
 loop = setTimeout("slidesAutoPlay()", 800);
}

const btnStart = document.querySelector(".btnStart");
const btnPause = document.querySelector(".btnPause");
btnStart.addEventListener("click", slidesAutoPlay);
btnPause.addEventListener("click", pause);
function pause(){
 clearTimeout(loop);
}



