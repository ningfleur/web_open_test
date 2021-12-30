const jsSlide = document.querySelectorAll(".js_slide");
const jsThumb = document.querySelectorAll(".js_thumb img");

let jsSlideIndex = 1;
showJsSlide(jsSlideIndex);

function showJsSlide(n){
 jsSlide.forEach((item) => {
  item.classList.add("d_none");
 });
 removeActive();
 if(n > jsSlide.length){
  jsSlideIndex = 1;
 }else if(n < 1) {
  jsSlideIndex = jsSlide.length;
 }
 jsSlide[jsSlideIndex - 1].classList.remove("d_none");
 jsThumb[jsSlideIndex - 1].classList.add("active");
}

function removeActive(){
  jsThumb.forEach((item) => {
    item.classList.remove("active");
  });
}

//點縮圖顯示大圖
let cn;  
const jsRow = document.querySelector(".js_row");
jsRow.addEventListener("click", function(e){
  removeActive();
  e.target.classList.add("active");
  jsSlideIndex = parseInt(e.target.dataset.id);
  showJsSlide(jsSlideIndex);
  cn = parseInt(e.target.dataset.id);
  JScurrentSlide(cn);
  // console.log(cn);
})

//記錄是第幾張照片，用函式來更新參數
function JScurrentSlide(n){
  jsSlideIndex = n;
}

//prev, next 
const prevBtn = document.querySelector(".js_prev");
const nextBtn = document.querySelector(".js_next");
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  plusSlide(jsSlideIndex += 1);
});

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  plusSlide(jsSlideIndex -= 1);
});

function plusSlide(x){
  showJsSlide(x);
  // console.log(x);
};
