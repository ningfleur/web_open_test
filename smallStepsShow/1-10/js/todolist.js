
const todoInput = document.querySelector("#todoInput");
const inputValue = document.querySelector("#inputValue");

//新增事項
let todoData = [];
todoInput.addEventListener("click", addTodoItem);
function addTodoItem(e){
 let obj = {
  id: new Date().getTime(),
  txt: inputValue.value,
  checked: ""
 };
 if(inputValue.value.trim() === ""){
  return;
 }else{
  todoData.unshift(obj);
  inputValue.value = "";
  // renderData(todoData);
  updateList();
 };
}

const listArea = document.querySelector("#listArea");
function renderData(todoData){
 let str = "";
 todoData.forEach((item) => {
  str += `<li class="todo_item" data-id=${item.id}>
  <lebal class="checkItem" for="checkbox"></lebal>
  <input type="checkbox" class="circle" ${item.checked}/>
  <span class="input_txt">${item.txt}</span>
  <span class="todo_delete" data-name="deleteIcon"><i data-feather="trash-2" class="icon_delete"></i></span>
 </li>`
 });
 listArea.innerHTML = str;
 feather.replace()
}

//鍵盤輸入
inputValue.addEventListener("keyup", function(e){
 if(e.key === "Enter"){
  addTodoItem();
 };
});

//點擊刪除
listArea.addEventListener("click", removeTodoItem);
function removeTodoItem(e){
 const itemID = parseInt(e.target.closest("li").dataset.id);
 console.log(e.target.nodeName);
 console.log(itemID);

 if(e.target.nodeName === "svg" || e.target.nodeName === "line" || e.target. nodeName === "path" || e.target.nodeName === "polyline"){
  console.log("got trash can");
  let index = todoData.findIndex((item) => item.id === itemID);
  todoData.splice(index, 1);
  // renderData();
  updateList();
 }else if(e.target.nodeName === "INPUT"){
  todoData.forEach((item) => {
   if(item.id === itemID){
    let showNum = "";
    if(item.checked === "checked"){
     item.checked = "";
    }else{
     item.checked = "checked";
    }
   }
  });
  updateList();
 }
}

//切換tab
const tabArea = document.querySelector("#tabArea");
let toggleState = "all"

tabArea.addEventListener("click", changeHighlight);
function changeHighlight(e){
 toggleState = e.target.dataset.state;
 let tabs = document.querySelectorAll("#tabArea li")
 console.log(tabs);
 tabs.forEach((item) => {
  item.classList.remove("active");
 });
 e.target.classList.add("active");
 updateList();
}

function updateList(item){
 let showData = [];
 if(toggleState === "toBeDone"){
  showData = todoData.filter((item) => item.checked === "");
 }else if(toggleState === "done"){
  showData = todoData.filter((item) => item.checked === "checked");
 }else {
  showData = todoData;
 }
 // //紀錄數量
 const showNum = document.querySelector("#showNum");
 console.log(showNum)
 let todoNum = todoData.filter((item) => item.checked === "");
 showNum.textContent = todoNum.length;
 
 renderData(showData);
}


