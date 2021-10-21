const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const subscribeBtn = document.querySelector("#subscribeBtn");
subscribeBtn.addEventListener("click", surscribe);
// console.log(subscribeBtn);

function surscribe(e){
 console.log("got it");
 if(nameInput.vlaue === "" || emailInput.value === ""){
  nameInput.placeholder = "不能空白";
  emailInput.placeholder = "email不能空白";
  return;
 }else{
  alert("訂閱成功");
  nameInput.vlaue = "";
  emailInput.vlaue = "";
  nameInput.placeholder = "YOUR NAME";
  emailInput.placeholder = "YOUR EMAIL";
 };
  nameInput.placeholder = "YOUR NAME";
  emailInput.placeholder = "YOUR EMAIL";
 };

 nameInput.placeholder = "YOUR NAME";
 emailInput.placeholder = "YOUR EMAIL";