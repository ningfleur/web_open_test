const likeBtn = document.querySelector("#likeBtn")
const likeNumber = document.querySelector("#likeNumber");
let count = 72;

likeBtn.addEventListener("click", toggleClass);
function toggleClass(e){
 if(e.target.classList.contains("far")){
  // console.log("outline heart");
  e.target.classList.remove("far");
  e.target.classList.add("fas", "red");
  count += 1;
 }else{
  e.target.classList.remove("fas", "red");
  e.target.classList.add("far");
  count -= 1;
 };
 // console.log(count);
 likeNumber.textContent = count;
};


//*--- day 2 ---*//
//切換tabs
const tabs = document.querySelector("#tabs");
let oneTab = document.querySelectorAll("#tabs li");

const tabContentArea = document.querySelectorAll("#tab_content_area section");
let tabContent01 = document.querySelector("#tabContent01");
let tabContent02 = document.querySelector("#tabContent02");
let tabContent03 = document.querySelector("#tabContent03");

tabs.addEventListener("click", changeTabs);
function changeTabs(e){
 if(e.target.nodeName === "I"){
  return;
 };

 tabContentArea.forEach((item) => {
  item.classList.add("d_none");
 });
 if(e.target.id === "tab01"){
  tabContent01.classList.remove("d_none");
  tabContent01.classList.add("d_block");
  changeClass();
 }else if(e.target.id === "tab02"){
  tabContent02.classList.remove("d_none");
  changeClass();
 }else if(e.target.id === "tab03"){
  tabContent03.classList.remove("d_none");
  changeClass();
 };

 function changeClass(){
  oneTab.forEach((item => {
   item.classList.remove("tab_current");
  }));
  let state = e.target.classList.contains("tab_current");
  if(!state){
   e.target.setAttribute("class", "tab_current");
  }else if(state){
   e.target.classList.remove("tab_current");
  };
 }
}; 
