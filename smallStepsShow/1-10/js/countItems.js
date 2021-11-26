const addItem = document.querySelector("#plus");
const removeItem = document.querySelector("#minus");
const quantity = document.querySelector("#quantity");
const remindTxt = document.querySelector(".remindTxt");

let subtotal = 0;
addItem.addEventListener("click", function(e){
 if(subtotal + total >= 10){
  addRemind();
  return;
 }else{
  removeRemind();
  subtotal ++;
  quantity.textContent = subtotal;
 };
 console.log(total, subtotal, typeof(subtotal))
});

removeItem.addEventListener("click", function(e){
 if(subtotal === 0) {
  return;
 }else if(subtotal + total <= 10){
  removeRemind();
  subtotal --;
  quantity.textContent = subtotal;
 }else{
  subtotal --;
  quantity.textContent = subtotal;
 };
 console.log(total, subtotal, typeof(subtotal))
});

function addRemind(){
 remindTxt.classList.remove("d_none");
}

function removeRemind(){
 remindTxt.classList.add("d_none");
}

let total = 0;

//新增到購物車
const addToBagBtn = document.querySelector("#addToBag")
addToBagBtn.addEventListener("click", function(e){
 if(subtotal === 0){
  return;
 }else if(total + subtotal > 10){
  addRemind();
  return;
 }else{
  total += subtotal;
  console.log(total);
  resetCounter();
  removeRemind();
  showCartTotal();
 }
});

//購物車顯示
const cartNum = document.querySelector("#cartNum");
function showCartTotal(){
 cartNum.classList.remove("cartHide");
 cartNum.textContent = total;
}

//清空數量欄位
function resetCounter(item){
 if(subtotal != 0){
  subtotal = 0;
  quantity.textContent = 0;
 };
};

//清空購物車
const emptyBag = document.querySelector("#emptyBag");
emptyBag.addEventListener("click", resetCart);
function resetCart(e){
 // console.log("ok");
 cartNum.textContent = 0;
 total = 0;
}