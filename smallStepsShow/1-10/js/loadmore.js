const lmBtn = document.querySelector("#lmBtn");

function threeRows(screen){
 if(screen.matches){
  lmBtn.addEventListener("click", loadmore);
  let currentItems = 3;
  function loadmore(e){
   const cardslist = [...document.querySelectorAll(".lmCard")];
    // console.log(cardslist);
   for(let i = currentItems; i < currentItems + 3; i++){
    if(cardslist[i]){
     cardslist[i].classList.remove("d_none");
     console.log(i);
    };
    }
    currentItems += 3;
    // console.log(showItems);
    // console.log(cardslist.length);
    if(currentItems >= cardslist.length){
     e.target.style.display = "none";
    }
  };
 }else{
  twoRows();
 }
}

function twoRows(){
 lmBtn.addEventListener("click", loadMoreTwo);
 let showItems = 2;
 function loadMoreTwo(e){
  const cardslist = [...document.querySelectorAll(".lmCard")];
  for(let i = showItems; i < showItems + 2; i++){
   if(cardslist[i]){
    cardslist[i].classList.remove("d_none");
    console.log(i);
   };
   }
   showItems += 2;
   // console.log(showItems);
   if(showItems >= cardslist.length){
    e.target.style.display = "none";
   }
 };
}


const screen = window.matchMedia("(min-width: 1023px)");
threeRows(screen);
screen.addListener(threeRows);