const accordionBtn = document.getElementsByClassName("accordionBtn");
let i;

for(i = 0; i < accordionBtn.length; i++){
 accordionBtn[i].addEventListener("click", function(e){
  let accActive = this.lastElementChild.firstElementChild;
  accActive.classList.toggle("acc_active");
  let panelContent = this.nextElementSibling;
  // console.log(panelContent);
  if(panelContent.style.maxHeight){
   panelContent.style.maxHeight = null;
  }else{
   panelContent.style.maxHeight = panelContent.scrollHeight + "px";
  };
 });
};

//working
function hidePenal(){
 const hidePanel = document.querySelectorAll(".answer");
 console.log(hidePanel);
 hidePanel.forEach((item) => item.classList.add("d_none"));
};
// hidePenal();
