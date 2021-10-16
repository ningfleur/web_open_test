const addItem = document.querySelector("#plus");
const removeItem = document.querySelector("#minus");
const itemNumber = document.querySelector("#itemNumber");

let subtotal = 0;
addItem.addEventListener("click", function(e){
 if(subtotal >= 10){
  alert("已達購買上限");
  return;
 }else{
  subtotal ++;
  itemNumber.textContent = subtotal;
 };
});

removeItem.addEventListener("click", function(e){
 if(subtotal == 0){
  return;
 }else{
  subtotal --;
  itemNumber.textContent = subtotal;
 }
});

//放入購物車，清空計算器
const addToBagBtn = document.querySelector("#addToBag");

addToBagBtn.addEventListener("click", function(e){
 if(subtotal != 0){
  alert("已加入購物袋");
  resetCounter();
 };
});

function resetCounter(item){
 if(subtotal != 0){
  subtotal = 0;
  itemNumber.textContent = 0;
 };
};

